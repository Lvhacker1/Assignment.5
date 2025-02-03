const quizQuestions = [
    {
        question:"Which surah is known as “The Opening” in the Quran?",
        options:["Surah Al-Fatiha", "Surah Al-Baqara"],
        correct:"Surah Al-Fatiha",
        explanation: "Correct answer: Surah Al-Fatiha (1:1-7)"
    },
    {
        question:"What is the holy book in Islam called?",
        options:["The Quran", "The Hadith"],
        correct:"The Quran",
        explanation: "Correct answer: The Quran. (Surah Al-Baqarah 2:185, 'An autumn month, in which the Qur'an was sent down as a guide to the people and a clarification of the guidance and the Criterion. Those of you who witness the month shall fast therein; and whoever is ill or traveling, then the same count from different days. God wants to bring you ease and not to bring you difficulty; and so that you may complete the count, and magnify God for what He has guided you to, and that you may be thankful.')"
    },
    {
        question:"Who is the first prophet according to the Quran?",
        options:["Noah", "Adam"],
        correct:"Adam",
        explanation: "Correct answer: Adam. (Surah Al-Baqarah (2:30-39), Surah Sad (38:71-76))."
    },
    {
        question:"What is the language of the Quran?",
        options:["Persian", "Arabic"],
        correct:"Arabic",
        explanation: "Correct answer: Arabic. (Surah Ash-Shu’ara (26:195), Surah An-Nahl (16:103), Surah Yusuf (12:2), Surah Ar-Ra’d (13:37), Surah Ta-Ha (20:113), Surah Az-Zumar (39:28), Surah Fussilat (41:3), )"
    },
    {
        question:"How many times a day must a Muslim pray according to the Quran?",
        options:["3", "5"],
        correct:"3",
        explanation: "Correct answer: 3. Quran (11:114, 17:78, 2:238, 24:58, 5:6)"
    },
    {
        question:"How long did Prophet Noah live according to the Quran?",
        options:["900 years", "950 years"],
        correct:"950 years",
        explanation: "Correct answer: 950 years. (Surah Al-’Ankabut, 29:14 'And We had sent Noah to his people, so he stayed with them one thousand years, less fifty calendar years. Then the flood took them while they were wicked.')"
    },
    {
        question:"How many times is the word “day” mentioned in the Quran?",
        options:["364", "365"],
        correct:"365",
        explanation: "Correct answer: 365. (The word “day” (يوم) is mentioned 365 times in the Quran, which aligns with the number of days in a solar year.)"
    },
    {
        question:"Does a Muslim have to do good deeds according to the Quran?",
        options:["Yes", "No"],
        correct:"Yes",
        explanation: "Correct answer: Yes. Surah Al-Baqarah (2:148), Surah Hud (11:114), Surah Al-Kahf (18:46), Surah Al-Qasas (28:84), Surah Fatir (35:10)"
    },
    {
        question:"What is the purpose of life according to the Quran?",
        options:["To worship Allah", "To seek knowledge"],
        correct:"To worship Allah",
        explanation: "Correct answer: To worship Allah. (Surah Adh-Dhariyat 51:56, 'I did not create the jinn and mankind except to worship Me.')"
    },
    {
        question:"Did the Hadiths reach us from the same sources as the Quran?",
        options:["Yes, both the Quran and Hadiths were passed down from the same sources.", "No, the Quran was written and arranged by the Prophet during his lifetime, while the Hadiths were compiled later."],
        correct:"No, the Quran was written and arranged by the Prophet during his lifetime, while the Hadiths were compiled later.",
        explanation: "Correct answer: No, the Quran was written and arranged by the Prophet during his lifetime, while the Hadiths were compiled later. (Surah Al-Furqan 25:5, 'And they say, Legends of the former peoples which he has written down, and they are dictated to him morning and afternoon.') (Surah An-Nahl 16:101-102, 'And when We exchange a verse in place of a verse – and Allah is most knowing of what He sends down – they say, You are but an inventor of lies. But most of them do not know.')"
    },
    {
        question:"Why would Allah preserve the Quran but not make its meaning clear to everyone?",
        options:["The Quran’s meaning has intentionally been left unclear to challenge people’s intellect.", "The meaning is preserved only for those who are sincere and seek guidance, while it remains unclear to rejecters."],
        correct:"The meaning is preserved only for those who are sincere and seek guidance, while it remains unclear to rejecters.",
        explanation: "Correct answer: The meaning is preserved only for those who are sincere and seek guidance, while it remains unclear to rejecters. (Surah Al-Waqi’ah,56:79, 'None touch it except the purified.') (Surah Fussilat 41:44, 'And if We had made it a non-Arabic Qur’an, they would have said, ‘Why are its verses not explained in detail? Is it a foreign [recitation] and an Arab [messenger]?’ Say, ‘It is, for those who believe, a guidance and cure.’ But those who do not believe – in their ears is deafness, and it is upon them blindness. Those are being called from a distant place.')"
    },
    {
        question:"How should the Quranic word “idriboo” in 4:34 be understood in the context of marital disputes?",
        options:["It means 'physically punish,' implying correction through strict discipline.", "It means 'separate/go forth,' suggesting a non-violent resolution to the situation."],
        correct:"It means 'separate/go forth,' suggesting a non-violent resolution to the situation.",
        explanation: "Correct answer: It means 'separate/go forth,' suggesting a non-violent resolution to the situation. (Surah An-Nisa 4:34, 'Men are in charge of women by [right of] what Allah has given one over the other and what they spend [for maintenance] from their wealth. So righteous women are devoutly obedient, guarding in [the husband’s] absence what Allah would have them guard. But those [wives] from whom you fear arrogance – [first] advise them; [then if they persist,] forsake them in bed; and [finally], separate from them. But if they obey you [once more], seek no means against them. Indeed, Allah is ever Exalted and Grand.')"
    },
    {
        question: "Which tree in Paradise was forbidden for Adam and Eve to eat from?",
        options: ["The Tree of Life", "The Forbidden Tree"],
        correct: "The Forbidden Tree",
        explanation: "Correct answer: The Forbidden Tree. (Surah Al-Baqarah 2:35, 'And We said: O Adam, reside you and your mate in the paradise, and eat from it bountifully as you both wish, and do not come near this tree, else you will be of those who have wronged.')"
    },
    {
        question: "Vad säger Koranen om att följa majoriteten i frågor om rätt och fel?",
        options: ["Majoriteten har alltid rätt", "Följ inte majoriteten om de leder vilse"],
        correct: "Följ inte majoriteten om de leder vilse",
        explanation: "Rätt svar: Följ inte majoriteten om de leder vilse. (Surah Al-An’am 6:116, 'Om du lyder de flesta på jorden, skulle de vilseleda dig bort från Allahs väg. De följer bara antaganden, och de gissar endast.')"
    }
]



$(document).ready(function () {
    let activeQuestionIndex = 0;
    let player1Score = 0;
    let player2Score = 0;
    let activePlayer = 1;
    let rounds = 0;
    let players = 1;

    $('.header_page-title').text('The Path Of Knowledge');
    $('.option1').text('1');
    $('.option2').text('2');
    $('.start-button').text('Start Game');
    $('.next-button').text('Next Question');
    $('.cancel-button').text('Cancel');
    $('.player-title').text('Select Players');
    $('.game-winner').text('Winner');
    $('.replay-button').text('Play Again');

    const quizOptions = $('.quiz-options');
    const quizScoreboard = $('.quiz-scoreboard');
    const quizPlayer = $('.quiz-player');
    const quizQuestion = $('.quiz-question');
    const playerSection = $('.player-section');
    const gameSummary = $('.game-summary');
    const gameRounds = $('.game-rounds');
    const gameWinner = $('.game-winner');
    const playerSelection = $('.player-selection');
    const quizSection = $('.quiz-section');
    const explanationSection = $('.fade-section');

    quizSection.hide();
    gameSummary.hide();
    explanationSection.hide();

    
    playerSelection.change(function () {
        players = parseInt($(this).val());
        resetGame(true);
    });

    $('.start-button').click(function () {
        resetGame(false);
        playerSection.hide();
        quizSection.show();
        gameSummary.hide()
        loadQuestion();
    });

    function loadQuestion() {
        if (activeQuestionIndex < quizQuestions.length) {
            const questionData = quizQuestions[activeQuestionIndex];
            quizQuestion.text(questionData.question);

            quizOptions.empty()
            let answered = false;
            questionData.options.forEach(option => {
                quizOptions.append(`<button class="option">${option}</button>`);
            });

            $('.next-button').hide();

            $('.option').off('click').on('click', function () {
                if (answered) return;
                answered = true;
                const selectedAnswer = $(this).text();
                const correctAnswer = quizQuestions[activeQuestionIndex].correct;
                const explanation = quizQuestions[activeQuestionIndex].explanation;

                if (selectedAnswer === correctAnswer) {
                    if (activePlayer === 1) {
                        player1Score++;
                    } else {
                        player2Score++;
                    }
                    explanationSection.text(explanation);
                } else {
                    explanationSection.text(`Incorrect answer. ${explanation}`);
                }

                explanationSection.fadeIn(1000);
                $('.next-button').show();
            });
            $('.next-button').off('click').on('click', function() {
                explanationSection.fadeOut(30, function() {
                    activeQuestionIndex++;
                    if (players === 1) {
                        activePlayer = 1;
                    } else {
                        activePlayer = activePlayer === 1 ? 2 : 1;
                    }
            
                    if (activeQuestionIndex === quizQuestions.length) {
                        endRound();
                    } else {
                        updateScoreboard();
                        loadQuestion();

                    }
                });
            });
        }
    }
    
    $('.next-button').hide();

    

    function updateScoreboard() {
        if (players === 1) {
            quizScoreboard.text(`Score: ${player1Score}`);
        } else {
            quizScoreboard.text(`Player 1 scores: ${player1Score} - Player 2 scores: ${player2Score}`);
        }
        quizPlayer.text( players === 1 ? "Select An Answer" : `Player ${activePlayer}'s turn` );
    }
    

    function endRound() {
        rounds++;
        quizSection.hide();
        gameSummary.show();
        gameRounds.text(`Rounds Played: ${rounds}`);

        if (players === 1) {
            gameWinner.text(`Score: ${player1Score}`);
        } else {
            gameWinner.text(player1Score > player2Score ? `"Player 1 wins!" Score: ${player1Score}` : player1Score < player2Score ? `"Player 2 wins!" Score: ${player2Score}` : "Its tie nOObs!");
        }
        $('.replay-button').show();
    }

    $('.replay-button').click(function () {
        activeQuestionIndex = 0;
        player1Score = 0;
        player2Score = 0;
        $('.quiz-section').show();
        gameSummary.hide();
        updateScoreboard();
        loadQuestion();
    });

    $('.cancel-button').click(function () {
        location.reload();
    });

    function resetGame(resetRounds) {
        activeQuestionIndex = 0;
        player1Score = 0;
        player2Score = 0;
        activePlayer = 1;
        if (resetRounds) {
            rounds = 0;
        }
        updateScoreboard();
        $('.replay-button').hide();
    }
});