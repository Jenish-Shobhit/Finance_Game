
        const checkpoints = [
            { 
                x: '10%', 
                lesson: 'Budgeting Basics', 
                content: 'A budget is a financial plan that helps you track income and expenses. Start by listing all sources of income and categorizing your expenses. Aim to save at least 20% of your income. Use the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment.'
            },
            { 
                x: '30%', 
                lesson: 'Saving Strategies', 
                content: 'Saving is crucial for financial stability. Set up an emergency fund aiming for 3-6 months of living expenses. Automate your savings by setting up automatic transfers to a separate savings account. Look for high-yield savings accounts to earn more interest. Consider using apps that round up purchases and save the difference.'
            },
            { 
                x: '50%', 
                lesson: 'Understanding Credit', 
                content: 'Credit scores range from 300-850 and affect your ability to borrow money. Pay bills on time, keep credit utilization below 30%, and don\'t close old credit accounts to maintain a good score. Check your credit report annually for free at AnnualCreditReport.com. Be cautious with credit cards and understand the terms before applying.'
            },
            { 
                x: '70%', 
                lesson: 'Introduction to Investing', 
                content: 'Investing helps grow wealth over time. Start with understanding different investment types: stocks, bonds, mutual funds, and ETFs. Consider your risk tolerance and investment timeline. Diversification is key to managing risk. Look into tax-advantaged accounts like 401(k)s and IRAs for retirement saving. Remember: higher potential returns often come with higher risk.'
            },
            { 
                x: '90%', 
                lesson: 'Stock Market Fundamentals', 
                content: 'The stock market is where company shares are bought and sold. Understand terms like dividends, P/E ratio, and market capitalization. Consider starting with index funds for broad market exposure. Do thorough research before investing in individual stocks. Be prepared for market volatility and avoid making emotional investment decisions. Remember: past performance doesn\'t guarantee future results.'
            }
        ];

        let currentCheckpoint = 0;
        let coins = 0;

        document.addEventListener('DOMContentLoaded', () => {
            initializeGame();
        });

        function initializeGame() {
            checkpoints.forEach((checkpoint, index) => {
                const checkpointElement = document.createElement('div');
                checkpointElement.className = 'checkpoint';
                checkpointElement.style.left = checkpoint.x;
                checkpointElement.textContent = index + 1;
                checkpointElement.onclick = () => showLesson(index);
                document.getElementById('game-container').appendChild(checkpointElement);
            });
        }

        function showLesson(index) {
            if (index > currentCheckpoint) return;
            const lesson = checkpoints[index];
            document.getElementById('lesson-title').textContent = lesson.lesson;
            document.getElementById('lesson-content').textContent = lesson.content;
            document.getElementById('finance-lesson').style.display = 'block';
        }

        function completeLesson() {
            document.getElementById('finance-lesson').style.display = 'none';
            if (currentCheckpoint < checkpoints.length - 1) {
                currentCheckpoint++;
                setTimeout(() => {
                    movePlayer();
                    coins += 100;
                    updateCoinDisplay();
                }, 300); // Delay to visually separate lessons
            } else {
                endGame();
            }
        }

        function movePlayer() {
            const player = document.getElementById('player');
            player.style.left = checkpoints[currentCheckpoint].x;
        }

        function updateCoinDisplay() {
            const coinDisplay = document.getElementById('coin-display');
            coinDisplay.textContent = coins;
            coinDisplay.style.transform = 'scale(1.2)';
            setTimeout(() => {
                coinDisplay.style.transform = 'scale(1)';
            }, 300);
        }

        function endGame() {
            document.getElementById('total-coins').textContent = coins;
            document.getElementById('end-screen').style.display = 'block';
        }

        function restartGame() {
            currentCheckpoint = 0;
            coins = 0;
            updateCoinDisplay();
            document.getElementById('player').style.left = '5%';
            document.getElementById('end-screen').style.display = 'none';
        }

        initializeGame();
