const SUPABASE_URL = 'https://sdopceflhqvkqcfmubyh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkb3BjZWZsaHF2a3FjZm11YnloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MjUwMTYsImV4cCI6MjA5MDEwMTAxNn0.ALQ_FDV07ozPLzXp9UwBBC9eNTuZSNq0hXscaWkFBOA';

const form = document.getElementById('idea-form');
const submitBtn = document.getElementById('submit-btn');
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const q1 = document.getElementById('q1').value.trim();
    const q2 = document.getElementById('q2').value.trim();
    const q3 = document.getElementById('q3').value.trim();
    const q4 = document.getElementById('q4').value.trim();
    const q5 = document.getElementById('q5').value.trim();

    if (!q1 && !q2 && !q3 && !q4 && !q5) {
        statusMessage.textContent = 'Skriv något i minst en fråga innan du skickar.';
        statusMessage.className = 'status error';
        statusMessage.hidden = false;
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Skickar...';
    statusMessage.hidden = true;

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/responses`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({ q1, q2, q3, q4, q5 })
        });

        if (!response.ok) {
            throw new Error('Något gick fel vid sparning.');
        }

        statusMessage.textContent = 'Tack! Dina svar har sparats.';
        statusMessage.className = 'status success';
        statusMessage.hidden = false;

        form.querySelectorAll('textarea').forEach(ta => ta.value = '');

    } catch (err) {
        statusMessage.textContent = 'Något gick fel. Försök igen.';
        statusMessage.className = 'status error';
        statusMessage.hidden = false;
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Skicka svar';
    }
});
