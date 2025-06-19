// UX Crime Scene JavaScript - The Ultimate User Experience Destroyer

// Global variables for chaos
let clickCount = 0;
let captchaRequired = false;
let currentCaptcha = '';
let captchaAttempts = 3;
let popupInterval;
let fontChaosInterval;
let pageTiltInterval;
let isPopupHellActive = false;
let konamiCode = [];
let scrollHijackActive = false;

// Font families for chaos
const fonts = [
    'font-1', 'font-2', 'font-3', 'font-4', 
    'font-5', 'font-6', 'font-7', 'font-8'
];

// Konami sequence
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

// Fake loading screen with progress
function startFakeLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('loadingProgress');
    const loadingText = document.getElementById('loadingText');
    
    let progress = 0;
    const messages = [
        "Loading essential files...",
        "Downloading the internet...",
        "Calculating meaning of life...",
        "Asking permission from your browser...",
        "Warming up the hamsters...",
        "Collecting your personal data...",
        "Installing backdoors...",
        "Almost done... (just kidding!)"
    ];
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 3;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        
        // Change loading text periodically
        if (Math.random() < 0.1) {
            loadingText.textContent = messages[Math.floor(Math.random() * messages.length)];
        }
        
        // "Complete" after 30 seconds
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                startMainChaos();
            }, 2000);
        }
    }, 100);
}

// Main chaos initialization
function startMainChaos() {
    console.log("🚨 UX CRIME SCENE ACTIVATED!");
    console.log("Prepare for the worst user experience of your life!");
    
    // Start all chaos functions
    initializeFontChaos();
    initializeScrollHijacking();
    initializeMouseFollowers();
    initializePageTilting();
    initializeAutoScroll();
    initializeFakeNotifications();
    initializeKeyboardChaos();
    
    // Show fake system notification
    showSystemNotification("System Alert: Your computer is now 50% slower due to this website");
}

// CAPTCHA System
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function requireCaptcha(message) {
    clickCount++;
    captchaRequired = true;
    currentCaptcha = generateCaptcha();
    
    document.getElementById('captchaChallenge').textContent = currentCaptcha;
    document.getElementById('captchaModal').style.display = 'flex';
    document.getElementById('captchaInput').value = '';
    document.getElementById('attemptsLeft').textContent = captchaAttempts;
    
    // Play annoying sound
    playAnnoyingSound();
    
    // Store the message for later
    window.pendingMessage = message;
}

function verifyCaptcha() {
    const userInput = document.getElementById('captchaInput').value;
    
    if (userInput === currentCaptcha) {
        document.getElementById('captchaModal').style.display = 'none';
        showSystemNotification(window.pendingMessage || "CAPTCHA verified successfully!");
        captchaAttempts = 3;
        captchaRequired = false;
    } else {
        captchaAttempts--;
        document.getElementById('attemptsLeft').textContent = captchaAttempts;
        
        if (captchaAttempts <= 0) {
            alert("Too many failed attempts! Generating new CAPTCHA...");
            currentCaptcha = generateCaptcha();
            document.getElementById('captchaChallenge').textContent = currentCaptcha;
            captchaAttempts = 3;
            document.getElementById('attemptsLeft').textContent = captchaAttempts;
        }
        
        // Shake the modal
        const modal = document.querySelector('.captcha-content');
        modal.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            modal.style.animation = 'shake 0.5s ease-in-out infinite';
        }, 500);
        
        playErrorSound();
    }
    
    document.getElementById('captchaInput').value = '';
}

// Sound Effects
function playAnnoyingSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log("Audio blocked by browser (thank goodness!)");
    }
}

function playErrorSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 200;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log("Error sound blocked");
    }
}

function playRandomSound() {
    const frequencies = [440, 523, 659, 784, 880, 1047];
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequencies[Math.floor(Math.random() * frequencies.length)];
    oscillator.type = Math.random() > 0.5 ? 'square' : 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Text Selection Nightmare
function fakeSelect(event) {
    event.preventDefault();
    const element = event.target;
    element.classList.add('fake-selected');
    
    setTimeout(() => {
        element.classList.remove('fake-selected');
    }, 500);
    
    showSystemNotification("Nice try! But you can't actually select this text!");
}

// Font Chaos
function initializeFontChaos() {
    const randomFontElements = document.querySelectorAll('.random-font');
    
    fontChaosInterval = setInterval(() => {
        randomFontElements.forEach(element => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            element.className = `random-font ${randomFont}`;
        });
    }, 2000);
}

// Evasive Button
function evadeClick(button) {
    const container = button.parentElement;
    const containerRect = container.getBoundingClientRect();
    
    const maxX = containerRect.width - button.offsetWidth;
    const maxY = containerRect.height - button.offsetHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    button.style.transition = 'all 0.3s ease';
    
    playRandomSound();
}

// Popup Hell
function startPopupHell() {
    if (isPopupHellActive) return;
    
    isPopupHellActive = true;
    const popupContainer = document.getElementById('popupAds');
    
    const popupMessages = [
        "🎁 FREE IPHONE! CLICK NOW!",
        "⚠️ VIRUS DETECTED! SCAN NOW!",
        "💰 YOU'VE WON $1,000,000!",
        "🔥 HOT SINGLES IN YOUR AREA!",
        "📞 CALL NOW! LIMITED TIME!",
        "🚨 SYSTEM ERROR! FIX NOW!",
        "🎪 JOIN OUR CIRCUS TODAY!",
        "🍕 FREE PIZZA FOR LIFE!",
        "👻 YOUR COMPUTER IS HAUNTED!",
        "🎭 BECOME A MIME ARTIST!",
        "🦄 UNICORNS AVAILABLE FOR RENT!",
        "🤡 CLOWN COLLEGE ENROLLMENT!"
    ];
    
    popupInterval = setInterval(() => {
        if (!isPopupHellActive) return;
        
        const popup = document.createElement('div');
        popup.className = 'popup-ad';
        popup.textContent = popupMessages[Math.floor(Math.random() * popupMessages.length)];
        popup.style.top = Math.random() * 70 + '%';
        popup.style.left = Math.random() * 70 + '%';
        
        popup.onclick = () => {
            requireCaptcha("You clicked an ad! Why would you do that?!");
            popup.remove();
        };
        
        popupContainer.appendChild(popup);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (popup.parentNode) {
                popup.remove();
            }
        }, 10000);
        
        playAnnoyingSound();
    }, 5000);
    
    showSystemNotification("Popup Hell activated! Good luck closing all the ads!");
}

function stopPopupHell() {
    isPopupHellActive = false;
    clearInterval(popupInterval);
    
    // Remove existing popups
    const popupContainer = document.getElementById('popupAds');
    popupContainer.innerHTML = '';
    
    showSystemNotification("Popup Hell stopped... for now.");
}

// Auto-play Video Chaos
function playAnnoyingVideo() {
    const video = document.getElementById('autoVideo');
    video.style.display = 'block';
    video.muted = false;
    video.play();
    
    // Create fake video controls that don't work
    const fakeControls = document.createElement('div');
    fakeControls.innerHTML = `
        <div style="position: fixed; top: 60%; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 10px; border-radius: 5px; z-index: 10000;">
            <button onclick="this.parentElement.remove(); showSystemNotification('Nice try! Video keeps playing!')">❌ Close</button>
            <button onclick="showSystemNotification('Mute button is broken!')">🔇 Mute</button>
            <button onclick="showSystemNotification('Pause is for losers!')">⏸️ Pause</button>
        </div>
    `;
    document.body.appendChild(fakeControls);
    
    // Hide video after 30 seconds
    setTimeout(() => {
        video.style.display = 'none';
        video.pause();
        if (fakeControls.parentNode) {
            fakeControls.remove();
        }
    }, 30000);
    
    showSystemNotification("Video started! No way to stop it! 😈");
}

// Infinite Scroll Chaos
function initializeInfiniteScroll() {
    const container = document.getElementById('infiniteContainer');
    const emptyMessages = [
        "Still loading...",
        "Please wait...",
        "Almost there...",
        "Loading more nothing...",
        "Generating emptiness...",
        "Creating void...",
        "Manufacturing boredom...",
        "Producing disappointment..."
    ];
    
    container.addEventListener('scroll', () => {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
            // Add more empty content
            for (let i = 0; i < 3; i++) {
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'empty-content';
                emptyDiv.textContent = emptyMessages[Math.floor(Math.random() * emptyMessages.length)];
                container.appendChild(emptyDiv);
            }
        }
    });
}

// Mouse Followers
function initializeMouseFollowers() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.05) { // 5% chance per mouse move
            createMouseFollower(e.clientX, e.clientY);
        }
    });
}

function createMouseFollower(x, y) {
    const followers = ['👻', '🤡', '💀', '👹', '🎭', '🦄', '🐙', '🍕'];
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    follower.textContent = followers[Math.floor(Math.random() * followers.length)];
    follower.style.left = x + 'px';
    follower.style.top = y + 'px';
    
    document.body.appendChild(follower);
    
    // Follow mouse for a bit
    let followCount = 0;
    const followInterval = setInterval(() => {
        followCount++;
        if (followCount > 20 || !follower.parentNode) {
            clearInterval(followInterval);
            if (follower.parentNode) {
                follower.remove();
            }
            return;
        }
        
        // Move towards a random direction
        const currentX = parseInt(follower.style.left);
        const currentY = parseInt(follower.style.top);
        follower.style.left = (currentX + Math.random() * 10 - 5) + 'px';
        follower.style.top = (currentY + Math.random() * 10 - 5) + 'px';
    }, 100);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        clearInterval(followInterval);
        if (follower.parentNode) {
            follower.remove();
        }
    }, 3000);
}

// Page Tilting
function initializePageTilting() {
    pageTiltInterval = setInterval(() => {
        const rotation = Math.random() * 6 - 3; // -3 to 3 degrees
        document.body.style.transform = `rotate(${rotation}deg)`;
    }, 8000);
}

// Auto Scroll Chaos
function initializeAutoScroll() {
    let scrollDirection = 1;
    let scrollActive = false;
    
    // Random auto-scroll activation
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every 10 seconds
            scrollActive = !scrollActive;
            if (scrollActive) {
                showSystemNotification("Auto-scroll activated! Hold on tight!");
            } else {
                showSystemNotification("Auto-scroll deactivated... for now.");
            }
        }
    }, 10000);
    
    // Auto-scroll execution
    setInterval(() => {
        if (scrollActive) {
            window.scrollBy(0, scrollDirection * 3);
            if (window.scrollY <= 0 || window.scrollY >= document.body.scrollHeight - window.innerHeight) {
                scrollDirection *= -1;
            }
        }
    }, 50);
}

// Fake System Notifications
function initializeFakeNotifications() {
    const notifications = [
        "Windows Update: 247 updates available",
        "Your subscription to Adobe expires in -3 days",
        "Chrome wants to access your soul",
        "Spotify is now playing 'Baby Shark' on repeat",
        "Your computer has gained sentience",
        "Microsoft Word has become self-aware",
        "Your browser is judging your life choices",
        "System32 has filed for divorce"
    ];
    
    setInterval(() => {
        if (Math.random() < 0.2) {
            const notification = notifications[Math.floor(Math.random() * notifications.length)];
            showSystemNotification(notification);
        }
    }, 15000);
}

function showSystemNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'system-notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Keyboard Chaos
function initializeKeyboardChaos() {
    document.addEventListener('keydown', (e) => {
        // Konami Code Detection
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            activateKonamiMode();
        }
        
        // Random key interference
        if (Math.random() < 0.1 && e.key.length === 1) {
            e.preventDefault();
            showSystemNotification(`Key '${e.key}' has been intercepted by the chaos engine!`);
        }
    });
}

function activateKonamiMode() {
    document.body.classList.add('konami-activated');
    showSystemNotification("🎮 KONAMI CODE ACTIVATED! MAXIMUM CHAOS MODE!");
    
    // Extra chaos effects
    document.body.style.animation = 'crazy-zoom 0.5s ease-in-out infinite, seizure-flash 0.2s linear infinite';
    
    setTimeout(() => {
        document.body.classList.remove('konami-activated');
        document.body.style.animation = '';
        showSystemNotification("Konami mode deactivated. You survived... barely.");
    }, 10000);
}

// Scroll Hijacking
function initializeScrollHijacking() {
    let hijackActive = false;
    
    setInterval(() => {
        hijackActive = !hijackActive;
        if (hijackActive) {
            document.addEventListener('scroll', hijackScroll);
            showSystemNotification("Scroll hijacking activated! Your scroll is now under our control!");
        } else {
            document.removeEventListener('scroll', hijackScroll);
            showSystemNotification("Scroll released... for now.");
        }
    }, 20000);
}

function hijackScroll(e) {
    // Reverse scroll direction randomly
    if (Math.random() < 0.3) {
        e.preventDefault();
        window.scrollBy(0, Math.random() * 200 - 100);
    }
}

// Right-click and Copy Protection
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    requireCaptcha("Right-click disabled! We hate user convenience!");
});

document.addEventListener('copy', (e) => {
    e.preventDefault();
    showSystemNotification("Copy disabled! Our content is too precious to share!");
});

document.addEventListener('selectstart', (e) => {
    if (Math.random() < 0.5) { // 50% chance to block selection
        e.preventDefault();
        showSystemNotification("Text selection randomly blocked!");
    }
});

// Page Unload Confirmation
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = 'Are you sure you want to leave this amazing UX disaster? Your suffering has just begun!';
});

// Console Spam
function spamConsole() {
    const messages = [
        "🚨 UX CRIME DETECTED!",
        "This website violates the Geneva Convention of Web Design!",
        "User experience has left the chat",
        "Accessibility score: -∞",
        "Performance score: Does not compute",
        "SEO score: What's SEO?",
        "Please don't actually build websites like this! 😄",
        "This is what happens when designers go rogue",
        "Web standards are crying somewhere",
        "Tim Berners-Lee is rolling in his... wait, he's still alive"
    ];
    
    setInterval(() => {
        console.log(messages[Math.floor(Math.random() * messages.length)]);
    }, 3000);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    startFakeLoading();
    spamConsole();
    initializeInfiniteScroll();
    
    // Easter egg: Double-click the title for extra chaos
    document.querySelector('.title').addEventListener('dblclick', () => {
        showSystemNotification("🎉 Secret chaos mode activated!");
        document.body.style.filter = 'hue-rotate(180deg) saturate(2) contrast(1.5)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 5000);
    });
});

// Global error handler to make errors even more annoying
window.addEventListener('error', (e) => {
    showSystemNotification(`💥 JavaScript Error: ${e.message} (This is probably our fault)`);
});

// Disable dev tools (doesn't actually work, but tries to)
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        showSystemNotification("Dev tools disabled! No peeking behind the curtain!");
    }
});

// Export functions for HTML onclick handlers
window.requireCaptcha = requireCaptcha;
window.verifyCaptcha = verifyCaptcha;
window.fakeSelect = fakeSelect;
window.evadeClick = evadeClick;
window.startPopupHell = startPopupHell;
window.stopPopupHell = stopPopupHell;
window.playAnnoyingVideo = playAnnoyingVideo;
window.playAnnoyingSound = playAnnoyingSound;
window.playRandomSound = playRandomSound;