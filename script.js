        const quotes = {
            happy: [
                { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
                { quote: "The best way to cheer yourself is to try to cheer someone else up.", author: "Mark Twain" },
                { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
                { quote: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam" },
                { quote: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon" },
                { quote: "The secret of happiness is not in doing what one likes, but in liking what one does.", author: "J.M. Barrie" },
                { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
                { quote: "The happiest people don't have the best of everything, they make the best of everything.", author: "Anonymous" },
                { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
                { quote: "The best way to cheer yourself is to try to cheer someone else up.", author: "Mark Twain" },
                { quote: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam" },
                { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
                { quote: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon" },
                { quote: "The secret of happiness is not in doing what one likes, but in liking what one does.", author: "J.M. Barrie" },
                { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
                { quote: "The happiest people don't have the best of everything, they make the best of everything.", author: "Anonymous" }
            ],
            sad: [
                { quote: "The way sadness works is one of the strange riddles of the world.", author: "Lemony Snicket" },
                { quote: "Tears are words that need to be written.", author: "Paulo Coelho" },
                { quote: "The good times of today are the sad thoughts of tomorrow.", author: "Bob Marley" },
                { quote: "Behind every sweet smile, there is a bitter sadness that no one can see.", author: "Tupac Shakur" },
                { quote: "Sometimes you need to sit lonely on the floor in a quiet room in order to hear your own voice.", author: "Charlotte Eriksson" },
                { quote: "The word 'happy' would lose its meaning if it were not balanced by sadness.", author: "Carl Jung" },
                { quote: "Sadness flies away on the wings of time.", author: "Jean de La Fontaine" },
                { quote: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss" }
            ],
            angry: [
                { quote: "For every minute you remain angry, you give up sixty seconds of peace of mind.", author: "Ralph Waldo Emerson" },
                { quote: "Speak when you are angry and you will make the best speech you will ever regret.", author: "Ambrose Bierce" },
                { quote: "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.", author: "Mark Twain" },
                { quote: "Holding onto anger is like drinking poison and expecting the other person to die.", author: "Buddha" },
                { quote: "The greatest remedy for anger is delay.", author: "Seneca" },
                { quote: "Never respond to an angry person with a fiery comeback, even if he deserves it… Don’t allow his anger to become your anger.", author: "Bohdi Sanders" },
                { quote: "Anger is never without a reason, but seldom with a good one.", author: "Benjamin Franklin" },
                { quote: "Anybody can become angry — that is easy, but to be angry with the right person and to the right degree… that is not easy.", author: "Aristotle" }
            ],

            motivated: [
                { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
                { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
                { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
                { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
                { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
                { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
                { quote: "Your limitation—it's only your imagination.", author: "Anonymous" }
            ],
            lazy: [
                { quote: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.", author: "Bill Gates" },
                { quote: "Progress isn't made by early risers. It's made by lazy men trying to find easier ways to do something.", author: "Robert Heinlein" },
                { quote: "I'm not lazy, I'm just very relaxed.", author: "Anonymous" },
                { quote: "The lazier a man is, the more he plans to do tomorrow.", author: "Norwegian Proverb" },
                { quote: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.", author: "Ralph Marston" },
                { quote: "Sometimes the most productive thing you can do is relax.", author: "Mark Black" },
                { quote: "Take rest; a field that has rested gives a bountiful crop.", author: "Ovid" },
                { quote: "There is virtue in work and there is virtue in rest. Use both and overlook neither.", author: "Alan Cohen" }
            ],
            heartbroken: [
                { quote: "The emotion that can break your heart is sometimes the very one that heals it.", author: "Nicholas Sparks" },
                { quote: "It is strange how often a heart must be broken before the years can make it wise.", author: "Sara Teasdale" },
                { quote: "Hearts will never be practical until they are made unbreakable.", author: "L. Frank Baum" },
                { quote: "The cure for a broken heart is simple, my lady. A hot bath and a good night’s sleep.", author: "Margaret George" },
                { quote: "Stab the body and it heals, but injure the heart and the wound lasts a lifetime.", author: "Mineko Iwasaki" },
                { quote: "You can’t buy love, but you can pay heavily for it.", author: "Henny Youngman" },
                { quote: "The heart was made to be broken.", author: "Oscar Wilde" },
                { quote: "Sometimes, the only soul that can mend a broken heart is the one that broke it.", author: "Anonymous" }
            ]

        };

        const backgroundClasses = {
            // happy: 'bg-happy',
            // sad: 'bg-sad',
            // motivated: 'bg-motivated',
            // lazy: 'bg-lazy',
            // // heartbroken:'bg-heartbroken',
            // angry: 'bg-angry'
        };

        function generateQuote(mood) {
            const quoteContainer = document.getElementById('quoteContainer');
            const quoteElement = document.getElementById('quote');
            const authorElement = document.getElementById('author');
            const body = document.body;

            // Remove all mood classes
            Object.values(backgroundClasses).forEach(cls => body.classList.remove(cls));
            
            // Add the new mood class
            body.classList.add(backgroundClasses[mood]);

            // Hide elements with animation
            quoteContainer.classList.remove('show');
            quoteElement.classList.remove('show');
            authorElement.classList.remove('show');

            // Get random quote from selected mood
            const moodQuotes = quotes[mood];
            const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];

            // Update content after animation
            setTimeout(() => {
                quoteElement.textContent = `"${randomQuote.quote}"`;
                authorElement.textContent = `— ${randomQuote.author}`;
                
                // Show elements with staggered animation
                setTimeout(() => {
                    quoteContainer.classList.add('show');
                    setTimeout(() => {
                        quoteElement.classList.add('show');
                        setTimeout(() => {
                            authorElement.classList.add('show');
                        }, 200);
                    }, 200);
                }, 100);
            }, 300);
        }

        // Initialize the quote container
        document.addEventListener('DOMContentLoaded', function() {
            const quoteContainer = document.getElementById('quoteContainer');
            const quoteElement = document.getElementById('quote');
            
            setTimeout(() => {
                quoteContainer.classList.add('show');
                setTimeout(() => {
                    quoteElement.classList.add('show');
                }, 200);
            }, 500);
        });