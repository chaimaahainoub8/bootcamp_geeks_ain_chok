document.addEventListener('DOMContentLoaded', () => {

    let quotes = [
        { id: 0, author: "Albert Einstein", quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", likes: 0 },
        { id: 1, author: "Nelson Mandela", quote: "Un gagnant est juste un rêveur qui n'a jamais abandonné.", likes: 0 },
        { id: 2, author: "Mark Twain", quote: "Ils ne savaient pas que c'était impossible, alors ils l'ont fait.", likes: 0 },
        { id: 3, author: "Steve Jobs", quote: "Votre temps est limité, ne le gâchez pas en menant une existence qui n'est pas la vôtre.", likes: 0 },
        { id: 4, author: "Albert Einstein", quote: "La folie, c'est de faire toujours la même chose et de s'attendre à un résultat différent.", likes: 0 }
    ];

    let lastQuoteIndex = -1;// Pour éviter la répétition immédiate
    let currentQuote = null;// Pour stocker la citation actuellement affichée
    let filteredQuotes = [];// Pour stocker les citations filtrées par auteur
    let currentFilterIndex = 0;// Pour naviguer dans les citations filtréesgi

    const quoteTextElem = document.querySelector('.quote-text');
    const quoteAuthorElem = document.querySelector('.quote-author');
    const generateQuoteBtn = document.getElementById('generate-quote-btn');
    const quoteInfoButtons = document.getElementById('quote-info-buttons');
    const likeCountElem = document.getElementById('like-count');
    const infoResultElem = document.getElementById('info-result');

    const displayQuote = (quoteObj) => {
        currentQuote = quoteObj;
        quoteTextElem.textContent = `"${quoteObj.quote}"`;
        quoteAuthorElem.textContent = `- ${quoteObj.author}`;
        likeCountElem.textContent = quoteObj.likes;
        quoteInfoButtons.classList.remove('hidden');
        infoResultElem.textContent = '';
    };

    generateQuoteBtn.addEventListener('click', () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (quotes.length > 1 && randomIndex === lastQuoteIndex);
        
        lastQuoteIndex = randomIndex;
        displayQuote(quotes[randomIndex]);

        document.getElementById('filter-navigation').classList.add('hidden');
    });

    const addQuoteForm = document.getElementById('add-quote-form');
    addQuoteForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newQuoteText = document.getElementById('new-quote-text').value;
        const newQuoteAuthor = document.getElementById('new-quote-author').value;

        const newQuote = {
            id: quotes.length,
            author: newQuoteAuthor,
            quote: newQuoteText,
            likes: 0
        };

        quotes.push(newQuote);

        displayQuote(newQuote);
        addQuoteForm.reset();
        
        console.log("Tableau de citations mis à jour :", quotes);
    });

    document.getElementById('char-count-spaces-btn').addEventListener('click', () => {
        if (currentQuote) {
            infoResultElem.textContent = `Nombre de caractères (espaces inclus) : ${currentQuote.quote.length}`;
        }
    });

    document.getElementById('char-count-no-spaces-btn').addEventListener('click', () => {
        if (currentQuote) {
            const charCount = currentQuote.quote.replace(/\s/g, '').length;
            infoResultElem.textContent = `Nombre de caractères (espaces exclus) : ${charCount}`;
        }
    });

    document.getElementById('word-count-btn').addEventListener('click', () => {
        if (currentQuote) {
            const wordCount = currentQuote.quote.trim().split(/\s+/).length;
            infoResultElem.textContent = `Nombre de mots : ${wordCount}`;
        }
    });

    document.getElementById('like-btn').addEventListener('click', () => {
        if (currentQuote) {
            currentQuote.likes++;
            likeCountElem.textContent = currentQuote.likes;
        }
    });
 
    const filterAuthorForm = document.getElementById('filter-author-form');
    filterAuthorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const authorToFilter = document.getElementById('author-filter-input').value.trim();

        filteredQuotes = quotes.filter(q => q.author.toLowerCase() === authorToFilter.toLowerCase());

        if (filteredQuotes.length > 0) {
            currentFilterIndex = 0;
            displayQuote(filteredQuotes[currentFilterIndex]);
            document.getElementById('filter-navigation').classList.remove('hidden');
            generateQuoteBtn.classList.add('hidden');
        } else {
            infoResultElem.textContent = `Aucune citation trouvée pour l'auteur "${authorToFilter}".`;
            document.getElementById('filter-navigation').classList.add('hidden');
        }
        filterAuthorForm.reset();
    });

// Navigation buttons for filtered quotes
    document.getElementById('next-quote-btn').addEventListener('click', () => {
        currentFilterIndex = (currentFilterIndex + 1) % filteredQuotes.length;
        displayQuote(filteredQuotes[currentFilterIndex]);
    });

    document.getElementById('prev-quote-btn').addEventListener('click', () => {
        currentFilterIndex = (currentFilterIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
        displayQuote(filteredQuotes[currentFilterIndex]);
    });
});