---
toc: false
comments: true
layout: default
title: GROUP PROJECT
description: group project
type: ccc
courses: { csse: {week: 12} }
permalink: /ccc/week12
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #87CEEB; /* Sky Blue */
        }

        #hamster {
            position: absolute;
            bottom: 10px;
            left: 0;
            transform: translateX(0);
            font-size: 7em; /* Adjust the font size to make the hamster bigger */
            transition: transform 0.1s ease-out; /* Adjust the transition duration for a faster slide */
        }

        .falling-item {
            position: absolute;
            font-size: 4em; /* Adjust the font size to make the carrots bigger */
            animation: fall 2s linear infinite;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }
    </style>
</head>
<body>
    <div id="hamster">
        🐹
    </div>

    <script>
        const hamster = document.getElementById('hamster');
        let hamsterPosition = 0;

        window.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                moveHamster('left');
            } else if (event.key === 'ArrowRight') {
                moveHamster('right');
            }
        });

        function moveHamster(direction) {
            const step = 20; // Adjust the step for a faster slide
            const bodyWidth = document.body.clientWidth;

            if (direction === 'left') {
                hamsterPosition = Math.max(hamsterPosition - step, 0);
            } else if (direction === 'right') {
                hamsterPosition = Math.min(hamsterPosition + step, bodyWidth);
            }

            hamster.style.transform = `translateX(${hamsterPosition}px)`;
        }

        function createFallingItem() {
            const fallingItem = document.createElement('div');
            fallingItem.classList.add('falling-item');
            fallingItem.innerHTML = '🥕'; // Carrot emoji

            fallingItem.style.left = `${Math.random() * 90 + 5}vw`;

            document.body.appendChild(fallingItem);

            fallingItem.addEventListener('animationend', () => {
                fallingItem.remove();
            });

            checkCollision(fallingItem);
        }

        function checkCollision(fallingItem) {
            const hamsterRect = hamster.getBoundingClientRect();
            const itemRect = fallingItem.getBoundingClientRect();

            if (
                itemRect.bottom >= hamsterRect.top &&
                itemRect.top <= hamsterRect.bottom &&
                itemRect.right >= hamsterRect.left &&
                itemRect.left <= hamsterRect.right
            ) {
                fallingItem.remove();
                // Handle collision (e.g., increase score)
            }
        }

        setInterval(createFallingItem, 1000); // Create falling items every second
        setInterval(() => {
            document.querySelectorAll('.falling-item').forEach((item) => {
                checkCollision(item);
            });
        }, 100); // Check collisions every 100 milliseconds
    </script>
</body>
</html>