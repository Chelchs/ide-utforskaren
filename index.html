  const SUPABASE_URL = 'https://sdopceflhqvkqcfmubyh.supabase.co';
  const SUPABASE_KEY =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
      '.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkb3BjZWZsaHF2a3FjZm11Ynlo' +
      'Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MjUwMTYsImV4cCI6MjA5MDEwMTAxNn0' +
      '.ALQ_FDV07ozPLzXp9UwBBC9eNTuZSNq0hXscaWkFBOA';

  const recipesContainer = document.getElementById('recipes');
  const emptyMessage = document.getElementById('empty-message');
  const modal = document.getElementById('modal');
  const recipeModal = document.getElementById('recipe-modal');
  const addBtn = document.getElementById('add-btn');
  const closeModal = document.getElementById('close-modal');
  const closeRecipeModal = document.getElementById('close-recipe-modal');
  const linkForm = document.getElementById('link-form');
  const ownForm = document.getElementById('own-form');
  const tabs = document.querySelectorAll('.tab');
  const filters = document.querySelectorAll('.filter');

  let currentFilter = 'alla';

  // Visa/dölj modal
  addBtn.addEventListener('click', () => { modal.hidden = false; });
  closeModal.addEventListener('click', () => { modal.hidden = true; });
  closeRecipeModal.addEventListener('click', () => { recipeModal.hidden = true; });

  modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.hidden = true;
  });
  recipeModal.addEventListener('click', (e) => {
      if (e.target === recipeModal) recipeModal.hidden = true;
  });

  // Tabbar (länk / eget recept)
  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          if (tab.dataset.tab === 'link') {
              linkForm.hidden = false;
              ownForm.hidden = true;
          } else {
              linkForm.hidden = true;
              ownForm.hidden = false;
          }
      });
  });

  // Filter
  filters.forEach(filter => {
      filter.addEventListener('click', () => {
          filters.forEach(f => f.classList.remove('active'));
          filter.classList.add('active');
          currentFilter = filter.dataset.category;
          loadRecipes();
      });
  });

  // Spara länk-recept
  linkForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const recipe = {
          title: document.getElementById('link-title').value.trim(),
          link: document.getElementById('link-url').value.trim(),
          image_url: document.getElementById('link-image').value.trim() || null,
          category: document.getElementById('link-category').value,
          is_link: true
      };

      await saveRecipe(recipe);
      linkForm.reset();
      modal.hidden = true;
      loadRecipes();
  });

  // Spara eget recept
  ownForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const recipe = {
          title: document.getElementById('own-title').value.trim(),
          ingredients: document.getElementById('own-ingredients').value.trim(),
          instructions: document.getElementById('own-instructions').value.trim(),
          image_url: document.getElementById('own-image').value.trim() || null,
          category: document.getElementById('own-category').value,
          is_link: false
      };

      await saveRecipe(recipe);
      ownForm.reset();
      modal.hidden = true;
      loadRecipes();
  });

  async function saveRecipe(recipe) {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/recipes`, {
          method: 'POST',
          headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=minimal'
          },
          body: JSON.stringify(recipe)
      });

      if (!response.ok) {
          alert('Något gick fel. Försök igen.');
      }
  }

  async function deleteRecipe(id) {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/recipes?id=eq.${id}`, {
          method: 'DELETE',
          headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`
          }
      });

      if (response.ok) {
          loadRecipes();
      }
  }

  async function loadRecipes() {
      let url = `${SUPABASE_URL}/rest/v1/recipes?order=created_at.desc`;
      if (currentFilter !== 'alla') {
          url += `&category=eq.${encodeURIComponent(currentFilter)}`;
      }

      const response = await fetch(url, {
          headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`
          }
      });

      const recipes = await response.json();

      recipesContainer.innerHTML = '';
      emptyMessage.hidden = recipes.length > 0;

      recipes.forEach(recipe => {
          const card = document.createElement('div');
          card.className = 'recipe-card';

          const imageHTML = recipe.image_url
              ? `<img src="${recipe.image_url}" alt="${recipe.title}">`
              : `<div class="no-image">🍽️</div>`;

          card.innerHTML = `
              ${imageHTML}
              <div class="recipe-card-body">
                  <h3>${recipe.title}</h3>
                  <span class="category-tag">${recipe.category || 'Övrigt'}</span>
              </div>
              <button class="delete-btn" title="Ta bort">&times;</button>
          `;

          card.addEventListener('click', (e) => {
              if (e.target.classList.contains('delete-btn')) return;

              if (recipe.is_link && recipe.link) {
                  window.open(recipe.link, '_blank');
              } else {
                  showRecipe(recipe);
              }
          });

          card.querySelector('.delete-btn').addEventListener('click', (e) => {
              e.stopPropagation();
              if (confirm('Vill du ta bort det här receptet?')) {
                  deleteRecipe(recipe.id);
              }
          });

          recipesContainer.appendChild(card);
      });
  }

  function showRecipe(recipe) {
      document.getElementById('recipe-modal-title').textContent = recipe.title;
      document.getElementById('recipe-modal-body').innerHTML = `
          <h3>Ingredienser</h3>
          <pre>${recipe.ingredients || 'Inga ingredienser angivna.'}</pre>
          <h3>Instruktioner</h3>
          <pre>${recipe.instructions || 'Inga instruktioner angivna.'}</pre>
      `;
      recipeModal.hidden = false;
  }

  // Ladda recept vid start
  loadRecipes();
