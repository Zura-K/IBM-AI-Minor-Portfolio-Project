document.addEventListener('DOMContentLoaded', function() {
    const Form = document.querySelector('form');
    const Popup = document.getElementById('Popup');
    const RecommendationSection = document.getElementById('recommendations');

    Form.addEventListener('submit', function(Event) {
        Event.preventDefault();

        const Name = document.getElementById('RecName').value.trim();
        const Message = document.getElementById('RecMessage').value.trim();

        if (Message === '') {
            alert('Message Cannot Be Empty');
            return;
        }

        const NewRec = document.createElement('div');
        NewRec.classList.add('recommendation');

        const Quote = document.createElement('p');
        Quote.textContent = `"${Message}"`;

        const Author = document.createElement('div');
        Author.classList.add('author');
        Author.textContent = Name ? `— ${Name}` : '— Anonymous';

        NewRec.appendChild(Quote);
        NewRec.appendChild(Author);
        RecommendationSection.appendChild(NewRec);

        Form.reset();

        Popup.classList.remove('hidden');
        setTimeout(() => {
            Popup.classList.add('hidden');
        }, 3000);
    });
});
