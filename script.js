// Hobby Data
const hobbiesData = [
    {
        id: 1,
        title: 'Fotogrāfija',
        category: 'creative',
        description: 'Fiksē brīžus un izsaki savu radošumu caur fotogrāfiju.',
        icon: '📸',
        difficulty: 2,
        details: 'Fotogrāfija ir brīnišķīgs veids, kā redzēt pasauli citādi. Sāc ar sava tālruņa kameru, apgūsti kompozīcijas pamatus un pakāpeniski ieguldi labākā aprīkojumā.',
        benefits: ['Mudina izpēti', 'Attīsta māstiecību', 'Saglabā atmiņas', 'Var kļūt rentabli']
    },
    {
        id: 2,
        title: 'Programmēšana',
        category: 'tech',
        description: 'Apgūsti kā uzbūvēt vietnes, aplikācijas un spēles no nulles.',
        icon: '💻',
        difficulty: 3,
        details: 'Programmēšana ir nākotnes prasme. Sāc ar Python vai JavaScript, izmanto platformas kā CodeAcademy vai Udemy, un veido projektus.',
        benefits: ['Augsti pieprasīta prasme', 'Radošas problēmu risināšanas', 'Vari uzbūvēt jebko', 'Potenciāla karjera ceļš']
    },
    {
        id: 3,
        title: 'Basketbols',
        category: 'sports',
        description: 'Komandas sports, kas attīsta spēku, koordināciju un sociālās prasmes.',
        icon: '🏀',
        difficulty: 2,
        details: 'Pievienojies vietējai komandai vai vienkārši spēlē laukumos. Basketbols uzlabo kardiovaskulāro veselību un mācā komandas darbu.',
        benefits: ['Fiziskā sagatavotība', 'Komandas sadarbība', 'Konkurences izlaidība', 'Sociālie savienojumi']
    },
    {
        id: 4,
        title: 'Zīmēšana un Gleznošana',
        category: 'creative',
        description: 'Izsaki sevi caur vizuālu mākslu un attīsti tehniskās prasmes.',
        icon: '🎨',
        difficulty: 2,
        details: 'Sāc ar zīmuļa skicēšanu, pēc tam pēti ūdensglīmes, akrilzīmes vai digitālo mākslu. Seko tiešsaistes pamācībām un prakticē katru dienu.',
        benefits: ['Pašizteiksme', 'Stresa mazināšana', 'Uzlabo novērošanu', 'Meditācijas prakse']
    },
    {
        id: 5,
        title: 'Mūzikas Ražošana',
        category: 'music',
        description: 'Veido savas ritma lietas un mūziku, izmantojot programmatūru un instrumentus.',
        icon: '🎵',
        difficulty: 3,
        details: 'Apgūsti mūzikas teoriju, izmanto DAW kā FL Studio vai Ableton, un eksperimentē ar dažādiem žanriem un stiliem.',
        benefits: ['Mūzikas izteiksme', 'Tehniskās prasmes', 'Radošs outlets', 'Sociālā kopiena']
    },
    {
        id: 6,
        title: 'Rakstīšana un Bloģošana',
        category: 'creative',
        description: 'Dalies ar stāstiem, idejām un pieredzēm caur radošu rakstīšanu.',
        icon: '✍️',
        difficulty: 1,
        details: 'Sāc emuāru, raksti īsus stāstus vai vedi dienasgrāmatu. Prakticē rakstīšanu katru dienu un lasi plašu literatūru.',
        benefits: ['Uzlabo komunikāciju', 'Saglabā domas', 'Radošs outlets', 'Vērtības uzkrāšana']
    },
    {
        id: 7,
        title: 'Futbols',
        category: 'sports',
        description: 'Populārs komandas sports, kas veicina fitnesi un draudzeltības jūtu.',
        icon: '⚽',
        difficulty: 2,
        details: 'Pievienojies skolas komisijām vai vietējiem klubiem. Futbols ir lieliski klases vingrošanai un stratēģiskajam domāšanai.',
        benefits: ['Kardio sagatavotība', 'Komandas prasmes', 'Globālā kopiena', 'Smaita konkurence']
    },
    {
        id: 8,
        title: 'Grafiskais Dizains',
        category: 'tech',
        description: 'Dizainē logotipus, afišas un citu vizuālu saturu.',
        icon: '🎯',
        difficulty: 2,
        details: 'Apgūsti rīkus kā Photoshop, Figma vai Canva. Pēti dizaina principus un prakticē dažādu dizainu veidošanu.',
        benefits: ['Radošas prasmes', 'Dizaina zināšanas', 'Potenciālie frilances ienākumi', 'Portfolio uzbūvēšana']
    },
    {
        id: 9,
        title: 'Šahs',
        category: 'academic',
        description: 'Stratēģiskā spēle, kas attīra kritisku domāšanu.',
        icon: '♟️',
        difficulty: 3,
        details: 'Apgūsti atvērtnes principus, vidējās spēles stratēģijas un beigu spēles. Pievienojies klubiem un spēlē Chess.com.',
        benefits: ['Garīga vingrošana', 'Stratēģiskā domāšana', 'Pacietība', 'Konkurencīga spēle']
    },
    {
        id: 10,
        title: 'Bokss un Vingrošana',
        category: 'sports',
        description: 'Uzbūvē spēku, pašpārliecinātību un pašaizsardzības prasmes.',
        icon: '🥊',
        difficulty: 2,
        details: 'Pievienojies boksa ģimnāzijam, lai apgūtu pareizu paņēmienu. Lieliski darbojās fitnesi un stresa mazināšanai.',
        benefits: ['Fiziskā sagatavotība', 'Pašpārliecinātība', 'Stresa mazināšana', 'Pašaizsardzības prasmes']
    },
    {
        id: 11,
        title: 'Spēles un Esports',
        category: 'tech',
        description: 'Konkurences vai neformālas spēles, kā hobby vai potenciālā karjera.',
        icon: '🎮',
        difficulty: 1,
        details: 'Spēlē dažādus spēles, pievienojies esports kopienām vai straumē. Fokusējies uz vienu spēli, lai uzlabotu savus rezultātus.',
        benefits: ['Izklaides', 'Kopiena', 'Konkurences izlaidība', 'Karjeras potenciāls']
    },
    {
        id: 12,
        title: 'Lasīšana un Literatūra',
        category: 'academic',
        description: 'Izpēti pasaules caur grāmatām un attīsti kritisku domāšanu.',
        icon: '📚',
        difficulty: 1,
        details: 'Pievienojies grāmatu klubiem, lasi apskatus, atklāj jaunus autoretes. Pēti dažādus žanrus, lai atrastu savus favorītus.',
        benefits: ['Zināšanu paplašināšana', 'Iztēle', 'Vārdnīcas pieaugums', 'Stresa mazināšana']
    },
    {
        id: 13,
        title: 'Gatavošana un Pārbaudīšana',
        category: 'creative',
        description: 'Veido garšīgas ēdienus un apgūsti kulinārās prasmes.',
        icon: '🍳',
        difficulty: 2,
        details: 'Sāc ar vienkāršiem receptēm, noskatīties gatavošanas kanālus un apgūsti produktu zinātni pamatus.',
        benefits: ['Dzīves prasme', 'Radošs izteikums', 'Veselīgāk ēšanas', 'Sociāla izklaide']
    },
    {
        id: 14,
        title: 'Ģitāra un Instrumenti',
        category: 'music',
        description: 'Apgūsti mūzikas atskaņot un taisīt mūziku.',
        icon: '🎸',
        difficulty: 2,
        details: 'Pieņem stundas vai izmanto aplikācijas kā Ultimate Guitar. Prakticē katru dienu konsekventi progresa dēļ.',
        benefits: ['Mūzikas prasme', 'Pašizteiksme', 'Garīgā attīstība', 'Pārnēsājama talanta']
    },
    {
        id: 15,
        title: 'Skeitbords',
        category: 'sports',
        description: 'Apgūsti triķus un apērc pilsētas ainavu uz skatborda.',
        icon: '🛹',
        difficulty: 2,
        details: 'Sāc skeitborda parkos, apgūsti pamatus no pamācībām un prakticē vienmērīgi.',
        benefits: ['Līdzsvara prasmes', 'Piedzīvojums', 'Foršais triķi', 'Ārējā aktivitāte']
    },
    {
        id: 16,
        title: 'Tīmekļa Dizains',
        category: 'tech',
        description: 'Veido skaistas un funkcionālas vietnes.',
        icon: '🌐',
        difficulty: 3,
        details: 'Apgūsti HTML, CSS, JavaScript. Izmanto frameworks kā React. Veido portfolio projektus.',
        benefits: ['Vērtīga prasme', 'Frilances ienākumi', 'Karjeras iespēja', 'Problēmu risināšana']
    },
    {
        id: 17,
        title: 'Volejbols',
        category: 'sports',
        description: 'Ātra komandas spēle ar daudz darbības.',
        icon: '🏐',
        difficulty: 2,
        details: 'Pievienojies skolas vai kopienas komandam. Lieliski komandas darba un fitneses prasme.',
        benefits: ['Komandas koordinācija', 'Apgādes ātrums', 'Sociālas prasmes', 'Fiziskā sagatavotība']
    },
    {
        id: 18,
        title: 'Video Rediģēšana',
        category: 'creative',
        description: 'Rediģē video YouTube, TikTok vai personīgajiem projektiem.',
        icon: '🎬',
        difficulty: 2,
        details: 'Apgūsti programmatūru kā DaVinci Resolve vai Premiere Pro. Veido YouTube saturu.',
        benefits: ['Radošas prasmes', 'Tehniskas zināšanas', 'Potenciālie ienākumi', 'Stāsta teikšana']
    },
    {
        id: 19,
        title: 'Diskusija un Publiska Runāšana',
        category: 'academic',
        description: 'Attīsti komunikācijas un kritisku domāšanu caur diskusiju.',
        icon: '🎤',
        difficulty: 2,
        details: 'Pievienojies diskusiju komandām, prakticē runas un piedalies sacensībās.',
        benefits: ['Komunikācijas prasmes', 'Pārliecība', 'Kritiska domāšana', 'Vadības prasmes']
    },
    {
        id: 20,
        title: 'Dārzkopība',
        category: 'creative',
        description: 'Audzē augsnes un dārzeņus, vienlaikus mācoties par dabu.',
        icon: '🌱',
        difficulty: 1,
        details: 'Sāc ar vienkāršiem augiem, piemēram, erbēm, apgūsti mitruma grafikus un baudīt svaigus produktus.',
        benefits: ['Dabas savienojums', 'Svaigi produkti', 'Atslābinājums', 'Vides apzinātība']
    }
];

// Initialize favorites from localStorage
let favorites = JSON.parse(localStorage.getItem('favoriteHobbies')) || [];

// DOM Elements
const hobbiesGrid = document.getElementById('hobbiesGrid');
const hobbyModal = document.getElementById('hobbyModal');
const modalBody = document.getElementById('modalBody');
const searchInput = document.getElementById('searchInput');
const favoritesList = document.getElementById('favoritesList');
const filterBtns = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let currentFilter = 'all';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderHobbies(hobbiesData);
    updateFavorites();
});

// Render Hobbies
function renderHobbies(hobbies) {
    hobbiesGrid.innerHTML = '';

    if (hobbies.length === 0) {
        hobbiesGrid.innerHTML = '<p class="no-hobbies">Nav atrasto hobiju. Mēģini citu meklēšanu vai filtru.</p>';
        return;
    }

    hobbies.forEach(hobby => {
        const isFavorite = favorites.some(fav => fav.id === hobby.id);
        const card = document.createElement('div');
        card.className = 'hobby-card';
        card.innerHTML = `
            <div class="hobby-image">${hobby.icon}</div>
            <div class="hobby-content">
                <span class="hobby-category">${hobby.category}</span>
                <h3 class="hobby-title">${hobby.title}</h3>
                <p class="hobby-description">${hobby.description}</p>
                <div class="hobby-difficulty">
                    <span>Grūtības:</span>
                    <span class="difficulty-stars">${'⭐'.repeat(hobby.difficulty)}</span>
                </div>
                <div class="hobby-buttons">
                    <button class="hobby-btn learn-btn" onclick="showModal(${hobby.id})">Uzzināt Vairāk</button>
                    <button class="hobby-btn favorite-btn ${isFavorite ? 'added' : ''}" onclick="toggleFavorite(${hobby.id}, event)">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        hobbiesGrid.appendChild(card);
    });
}

// Search Hobbies
function filterHobbies() {
    const searchTerm = searchInput.value.toLowerCase();
    let filtered = hobbiesData.filter(hobby =>
        hobby.title.toLowerCase().includes(searchTerm) ||
        hobby.description.toLowerCase().includes(searchTerm) ||
        hobby.category.toLowerCase().includes(searchTerm)
    );

    if (currentFilter !== 'all') {
        filtered = filtered.filter(hobby => hobby.category === currentFilter);
    }

    renderHobbies(filtered);
}

// Filter by Category
function filterByCategory(category) {
    currentFilter = category;
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let filtered = hobbiesData;

    if (category !== 'all') {
        filtered = hobbiesData.filter(hobby => hobby.category === category);
    }

    // Apply search filter as well
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(hobby =>
            hobby.title.toLowerCase().includes(searchTerm) ||
            hobby.description.toLowerCase().includes(searchTerm)
        );
    }

    renderHobbies(filtered);
}

// Show Modal
function showModal(hobbyId) {
    const hobby = hobbiesData.find(h => h.id === hobbyId);
    if (!hobby) return;

    modalBody.innerHTML = `
        <h2 class="modal-title">${hobby.title}</h2>
        <span class="modal-category">${hobby.category}</span>
        <div class="modal-details">
            <p><strong>Apraksts:</strong> ${hobby.description}</p>
            <p><strong>Grūtības Līmenis:</strong> ${'⭐'.repeat(hobby.difficulty)}</p>
            <p><strong>Detaļas:</strong> ${hobby.details}</p>
            <p><strong>Ieguvumi:</strong></p>
            <ul style="margin-left: 1.5rem; color: var(--text-light);">
                ${hobby.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
            <button class="hobby-btn learn-btn" style="margin-top: 1rem; width: 100%;" onclick="closeModal()">
                Aizvērt
            </button>
        </div>
    `;
    hobbyModal.style.display = 'block';
}

// Close Modal
function closeModal() {
    hobbyModal.style.display = 'none';
}

// Toggle Favorite
function toggleFavorite(hobbyId, event) {
    event.stopPropagation();
    const hobby = hobbiesData.find(h => h.id === hobbyId);
    const index = favorites.findIndex(fav => fav.id === hobbyId);

    if (index > -1) {
        favorites.splice(index, 1);
        event.target.closest('.favorite-btn').classList.remove('added');
    } else {
        favorites.push(hobby);
        event.target.closest('.favorite-btn').classList.add('added');
    }

    localStorage.setItem('favoriteHobbies', JSON.stringify(favorites));
    updateFavorites();

    // Update main grid
    filterHobbies();
}

// Update Favorites Section
function updateFavorites() {
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p class="no-hobbies">Vēl nav favorītu. Pievienojiet hobijus, lai sāktu!</p>';
    } else {
        renderFavoritesGrid();
    }
}

// Render Favorites Grid
function renderFavoritesGrid() {
    favoritesList.innerHTML = '';
    favorites.forEach(hobby => {
        const card = document.createElement('div');
        card.className = 'hobby-card';
        card.innerHTML = `
            <div class="hobby-image">${hobby.icon}</div>
            <div class="hobby-content">
                <span class="hobby-category">${hobby.category}</span>
                <h3 class="hobby-title">${hobby.title}</h3>
                <p class="hobby-description">${hobby.description}</p>
                <div class="hobby-difficulty">
                    <span>Grūtības:</span>
                    <span class="difficulty-stars">${'⭐'.repeat(hobby.difficulty)}</span>
                </div>
                <div class="hobby-buttons">
                    <button class="hobby-btn learn-btn" onclick="showModal(${hobby.id})">Uzzināt Vairāk</button>
                    <button class="hobby-btn favorite-btn added" onclick="toggleFavorite(${hobby.id}, event)">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        favoritesList.appendChild(card);
    });
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
        // Close hamburger menu if open
        navLinks.style.display = 'none';
    }
}

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === hobbyModal) {
        closeModal();
    }
});

// Handle Form Submit
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Simple validation and success message
    if (name && email && message) {
        alert(`Paldies, ${name}! Mēs saņēmām tavai vēstuli un tūlīt atbildēsim.`);
        form.reset();
    }
}

// Responsive Navigation
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

// Add smooth scrolling effect for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
