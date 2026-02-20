// ============ PORTFOLIO SCRIPTS ============
if(document.getElementById("typing")) {
    const text=["BSIT Student","Aspiring IT Professional","Open for Part Time Work"];
    let index=0,charIndex=0;
    const typingDiv=document.getElementById("typing");
    function typeEffect(){if(charIndex<text[index].length){typingDiv.textContent+=text[index].charAt(charIndex);charIndex++;setTimeout(typeEffect,80);}else{setTimeout(eraseEffect,1500);}}
    function eraseEffect(){if(charIndex>0){typingDiv.textContent=text[index].substring(0,charIndex-1);charIndex--;setTimeout(eraseEffect,50);}else{index=(index+1)%text.length;setTimeout(typeEffect,200);}}
    typeEffect();

    const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity=1;entry.target.style.transform='translateY(0)';}})},{threshold:0.2});
    document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el));

    const skillObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.width=entry.target.getAttribute('data-width');}})},{threshold:0.5});
    document.querySelectorAll('.skill-fill').forEach(el=>skillObserver.observe(el));

    const navbar=document.getElementById('navbar');
    window.addEventListener('scroll',()=>{if(window.scrollY>50){navbar.classList.add('scrolled');}else{navbar.classList.remove('scrolled');}});
    
    const sections=document.querySelectorAll('.section, .hero');
    const navLinks=document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll',()=>{let current='';sections.forEach(sec=>{const sectionTop=sec.offsetTop-60;if(window.scrollY>=sectionTop){current=sec.id;}});navLinks.forEach(link=>{link.classList.remove('active');if(link.getAttribute('href')=='#'+current){link.classList.add('active');}});});
    
    const backBtn=document.getElementById('backToTop');
    window.addEventListener('scroll',()=>{if(window.scrollY>300){backBtn.style.display='block';}else{backBtn.style.display='none';}});
    backBtn.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});
    
    if(document.getElementById("particles-js")) {
        particlesJS("particles-js",{
        "particles":{"number":{"value":60,"density":{"enable":true,"value_area":800}},"color":{"value":["#00F0FF","#B159FF"]},"shape":{"type":"circle"},"opacity":{"value":0.6,"random":true},"size":{"value":3,"random":true},"line_linked":{"enable":true,"distance":150,"color":"#00F0FF","opacity":0.3,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"bounce":false}},
        "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"}}},
        "retina_detect":true
        });
    }
}

// ============ ULTIMATE GAME ENGINE ============
if(document.getElementById('game-container')) {
class UltimateNeonClicker {
constructor() {
this.PP = 0;
this.prestige = 0;
this.prestigeMult = 1;
this.combo = 1;
this.lastClickTime = 0;
// Upgrades
this.clickPower = 1;
this.autoClickers = 0;
this.maxShapes = 3;
this.goldenChance = 0;
this.shapeVariety = false;
this.feverMode = false;
this.critChance = 0;
this.chainCombos = false;
this.shapeEvolution = false;
this.rainbowSkin = false;
this.autoClickerMultiplier = 1;
this.clickMultiplier = 1;
// Levels
this.levels = {clickPower:0,autoClicker:0,maxShapes:0,goldenChance:0,shapeVariety:0,feverMode:0,critChance:0,chainCombos:0,shapeEvolution:0,rainbowSkin:0,autoClickerMultiplier:0,clickMultiplier:0};
// Base costs
this.baseCosts = {clickPower:10,autoClicker:50,maxShapes:100,goldenChance:200,shapeVariety:300,feverMode:500,critChance:400,chainCombos:600,shapeEvolution:800,rainbowSkin:1000,autoClickerMultiplier:1500,clickMultiplier:1500};
// Buildings
this.buildings = [
{id:'script',name:'💻 Code Script',baseCost:500,pps:5,count:0},
{id:'bot',name:'🤖 Auto Bot',baseCost:2000,pps:25,count:0},
{id:'server',name:'🖥️ Server Farm',baseCost:10000,pps:150,count:0},
{id:'ai',name:'🌐 AI Network',baseCost:50000,pps:1000,count:0},
{id:'cloud',name:'☁️ Cloud Cluster',baseCost:200000,pps:5000,count:0},
{id:'quantum',name:'⚛️ Quantum Core',baseCost:1000000,pps:25000,count:0}
];
// Shop Items (Fixed & Enhanced)
this.shopItems = [
{id:'clickPower',name:'⚡ Click Power +1',desc:'Increase PP per click',baseCost:10,costMult:1.15,maxLevel:100},
{id:'autoClicker',name:'🤖 Auto Clicker',desc:'+1 PP per second',baseCost:50,costMult:1.15,maxLevel:100},
{id:'maxShapes',name:'🎯 Max Shapes +1',desc:'More shapes on screen',baseCost:100,costMult:1.25,maxLevel:20},
{id:'goldenChance',name:'⭐ Golden Chance',desc:'+5% chance for 5x PP',baseCost:200,costMult:1.3,maxLevel:10},
{id:'critChance',name:'🎲 Critical Hits',desc:'+3% chance for 3x PP',baseCost:400,costMult:1.3,maxLevel:10}
];
// Upgrades (Fixed & Enhanced)
this.upgradeItems = [
{id:'shapeVariety',name:'💫 Shape Variety',desc:'Unlock new shape types',baseCost:300,purchased:false},
{id:'feverMode',name:'⚡ Fever Mode',desc:'Events 2x more often',baseCost:500,purchased:false},
{id:'chainCombos',name:'🔗 Chain Combos',desc:'Click same type for bonus',baseCost:600,purchased:false},
{id:'shapeEvolution',name:'🦋 Shape Evolution',desc:'Shapes grow over time',baseCost:800,purchased:false},
{id:'rainbowSkin',name:'🌈 Rainbow Skin',desc:'Unlock rainbow shape skin',baseCost:1000,purchased:false},
{id:'autoClickerMultiplier',name:'⚙️ Auto Boost',desc:'Auto clickers 2x more effective',baseCost:1500,costMult:1.5,purchased:false,level:0},
{id:'clickMultiplier',name:'💥 Click Boost',desc:'Click power 2x more effective',baseCost:1500,costMult:1.5,purchased:false,level:0}
];
// Settings
this.settings = {potato:false,animations:true,particles:true,screenEffects:true,sounds:false,theme:'neon'};
// Statistics
this.stats = {totalClicks:0,totalPP:0,shapesClicked:0,goldenClicked:0,critHits:0,playTime:0,bestCombo:0,prestigeCount:0,startTime:Date.now()};
// Achievements
this.achievements = [
{id:'first',name:'First Click',desc:'Click your first shape',icon:'👆',tiers:[{req:1,unlocked:false}],current:0},
{id:'golden',name:'Golden Touch',desc:'Click golden shapes',icon:'⭐',tiers:[{req:1,unlocked:false},{req:10,unlocked:false},{req:50,unlocked:false},{req:100,unlocked:false}],current:0},
{id:'combo5',name:'Combo x5',desc:'Reach 5x combo',icon:'🔥',tiers:[{req:5,unlocked:false}],current:0},
{id:'combo10',name:'Combo x10',desc:'Reach 10x combo',icon:'💫',tiers:[{req:10,unlocked:false}],current:0},
{id:'prestige1',name:'Reborn',desc:'Prestige once',icon:'♻️',tiers:[{req:1,unlocked:false}],current:0},
{id:'pp1000',name:'Power Up',desc:'Earn total PP',icon:'⚡',tiers:[{req:1000,unlocked:false},{req:10000,unlocked:false},{req:100000,unlocked:false}],current:0},
{id:'clicks100',name:'Dedicated',desc:'Total clicks',icon:'🎯',tiers:[{req:100,unlocked:false},{req:1000,unlocked:false}],current:0},
{id:'buildings10',name:'Builder',desc:'Own 10 buildings',icon:'🏢',tiers:[{req:10,unlocked:false},{req:50,unlocked:false}],current:0}
];
// Challenges
this.challenges = {
daily: [
{id:'d1',name:'Click 100 shapes',goal:100,progress:0,reward:200,claimed:false,reset:Date.now()},
{id:'d2',name:'Reach x5 combo 3x',goal:3,progress:0,reward:150,claimed:false,reset:Date.now()},
{id:'d3',name:'Earn 5,000 PP',goal:5000,progress:0,reward:300,claimed:false,reset:Date.now()}
],
weekly: [
{id:'w1',name:'Earn 50,000 PP',goal:50000,progress:0,reward:2000,claimed:false,reset:Date.now()}
]
};
// Collection
this.collection = {
circle: {count:0,bonus:'None',unlockReq:0},
square: {count:0,bonus:'+1% PP',unlockReq:50},
triangle: {count:0,bonus:'+2% PP',unlockReq:100},
star: {count:0,bonus:'+5% golden chance',unlockReq:200},
gold: {count:0,bonus:'+10% crit chance',unlockReq:50}
};
// Streak
this.streak = {current:0,lastClaim:0,days:[]};
// Buffs & Power-ups
this.buffs = {};
this.powerUps = {
fever: {active:false,cost:500,duration:30},
golden: {active:false,cost:1000,duration:45},
crit: {active:false,cost:400,duration:25},
timeWarp: {active:false,cost:2000,duration:60}
};
// Shapes
this.shapes = [];
this.shapeTypes = ['circle'];
this.orbs = [];
this.bossActive = false;
this.bossHealth = 0;
this.bossMaxHealth = 0;
// Chain combo
this.chain = {type:null,count:0,multiplier:1};
// Activity Log
this.activityLog = [];
// DOM
this.gameArea = document.getElementById('game-area');
this.ppDisplay = document.getElementById('pp-display');
this.prestigeDisplay = document.getElementById('prestige-display');
this.comboDisplay = document.getElementById('combo-display');
this.multDisplay = document.getElementById('mult-display');
this.prestigeMultDisplay = document.getElementById('prestige-mult');
this.buffsBar = document.getElementById('buffs-bar');
this.powerUpsBar = document.getElementById('powerups-bar');
this.notificationArea = document.getElementById('notification-area');
this.achievementsGrid = document.getElementById('achievements-grid');
this.statsGrid = document.getElementById('stats-grid');
this.challengesList = document.getElementById('challenges-list');
this.collectionGrid = document.getElementById('collection-grid');
this.buildingsList = document.getElementById('buildings-list');
this.themeSelector = document.getElementById('theme-selector');
this.saveIndicator = document.getElementById('save-indicator');
// Themes
this.themes = [
{id:'neon',name:'Neon City',colors:{bg:'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,50,100,0.4))',border:'#00F0FF'}},
{id:'space',name:'Deep Space',colors:{bg:'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(50,0,100,0.6))',border:'#B159FF'}},
{id:'inferno',name:'Inferno',colors:{bg:'linear-gradient(135deg, rgba(50,0,0,0.7), rgba(100,50,0,0.5))',border:'#FF6B6B'}},
{id:'ocean',name:'Ocean',colors:{bg:'linear-gradient(135deg, rgba(0,0,50,0.7), rgba(0,100,100,0.5))',border:'#0099FF'}},
{id:'sakura',name:'Sakura',colors:{bg:'linear-gradient(135deg, rgba(50,0,50,0.6), rgba(100,50,100,0.4))',border:'#FF69B4'}}
];
this.audioCtx = null;
this.loadGame();
this.init();
}

init() {
this.setupTabs();
this.renderShop();
this.renderUpgrades();
this.setupBuyButtons();
this.setupSettings();
this.setupPrestige();
this.setupPowerUps();
this.setupImportExport();
this.setupAimTrainer();
this.startGameLoops();
this.spawnInitialShapes();
this.updateUI();
this.renderAchievements();
this.renderStats();
this.renderChallenges();
this.renderCollection();
this.renderBuildings();
this.renderThemes();
this.checkStreak();
this.checkOfflineProgress();
this.logAction("🎮 Game Initialized");
}

logAction(msg) {
const time = new Date().toLocaleTimeString();
this.activityLog.unshift(`[${time}] ${msg}`);
if(this.activityLog.length > 50) this.activityLog.pop();
const logEl = document.getElementById('activity-log');
if(logEl) {
logEl.innerHTML = this.activityLog.map(l => `<div style="border-bottom:1px solid rgba(255,255,255,0.1);padding:4px 0;">${l}</div>`).join('');
}
}

initAudio() {
if(!this.settings.sounds || this.audioCtx) return;
this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

playSound(type) {
if(!this.settings.sounds || !this.audioCtx) return;
const osc = this.audioCtx.createOscillator();
const gain = this.audioCtx.createGain();
osc.connect(gain);
gain.connect(this.audioCtx.destination);
switch(type) {
case 'click': osc.frequency.value = 800; gain.gain.value = 0.1; break;
case 'golden': osc.frequency.value = 1200; gain.gain.value = 0.15; break;
case 'crit': osc.frequency.value = 600; gain.gain.value = 0.2; break;
case 'purchase': osc.frequency.value = 1000; gain.gain.value = 0.1; break;
case 'prestige': osc.frequency.value = 400; gain.gain.value = 0.3; break;
}
osc.start();
osc.stop(this.audioCtx.currentTime + 0.1);
}

// ============ SHOP SYSTEM (FIXED) ============
getShopCost(item) {
const level = this.levels[item.id] || 0;
return Math.floor(item.baseCost * Math.pow(item.costMult, level));
}

renderShop() {
const shopEl = document.getElementById('shop');
if(!shopEl) return;
shopEl.innerHTML = this.shopItems.map(item => {
const level = this.levels[item.id] || 0;
const cost = this.getShopCost(item);
const canBuy = this.PP >= cost;
const atMax = item.maxLevel && level >= item.maxLevel;
return `
<div class="upgrade-item">
<div class="upgrade-info">
<h4>${item.name} ${level > 0 ? `<span class="upgrade-level">Lv.${level}</span>` : ''}</h4>
<p>${item.desc} ${item.maxLevel ? `(Max: ${item.maxLevel})` : ''}</p>
</div>
<div>
<div class="upgrade-cost">${atMax ? 'MAX LEVEL' : cost.toLocaleString() + ' PP'}</div>
<button class="buy-btn" data-shop="${item.id}" ${!canBuy || atMax ? 'disabled' : ''}>${atMax ? '✓' : 'Buy'}</button>
</div>
</div>
`;
}).join('');
}

// ============ UPGRADES SYSTEM (FIXED) ============
getUpgradeCost(upgrade) {
if(upgrade.purchased && !upgrade.level) return Infinity;
const level = upgrade.level || 0;
return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMult || 1, level));
}

renderUpgrades() {
const upgradesEl = document.getElementById('upgrades');
if(!upgradesEl) return;
upgradesEl.innerHTML = this.upgradeItems.map(upgrade => {
const cost = this.getUpgradeCost(upgrade);
const canBuy = this.PP >= cost;
const purchased = upgrade.purchased;
const level = upgrade.level || 0;
return `
<div class="upgrade-item">
<div class="upgrade-info">
<h4>${upgrade.name} ${level > 0 ? `<span class="upgrade-level">Lv.${level}</span>` : ''}</h4>
<p>${upgrade.desc}</p>
</div>
<div>
<div class="upgrade-cost">${purchased && !upgrade.level ? 'PURCHASED' : cost.toLocaleString() + ' PP'}</div>
<button class="buy-btn" data-upgrade-item="${upgrade.id}" ${!canBuy || (purchased && !upgrade.level) ? 'disabled' : ''}>${purchased && !upgrade.level ? '✓' : 'Buy'}</button>
</div>
</div>
`;
}).join('');
}

spawnShape() {
if(this.shapes.length >= this.maxShapes || this.bossActive) return;
const shape = document.createElement('div');
shape.className = 'game-shape';
const types = this.shapeVariety ? ['circle','square','triangle','star'] : ['circle'];
const type = types[Math.floor(Math.random() * types.length)];
shape.dataset.type = type;
let goldenChance = this.goldenChance + (this.collection.gold.count >= 50 ? 0.1 : 0);
const isGolden = Math.random() < goldenChance;
if(isGolden) {
shape.classList.add('shape-gold');
} else {
if(this.rainbowSkin) {
shape.classList.add('shape-rainbow');
} else {
shape.classList.add(`shape-${type}`);
}
}
const size = Math.floor(Math.random() * 30) + 35;
shape.style.width = `${size}px`;
shape.style.height = `${size}px`;
shape.dataset.evolution = 1;
shape.dataset.spawnTime = Date.now();
const maxX = this.gameArea.offsetWidth - size;
const maxY = this.gameArea.offsetHeight - size;
const x = Math.random() * maxX;
const y = Math.random() * maxY;
shape.style.left = `${x}px`;
shape.style.top = `${y}px`;
shape.dataset.vx = (Math.random() - 0.5) * 1.5;
shape.dataset.vy = (Math.random() - 0.5) * 1.5;
let baseValue = Math.floor(size / 5);
shape.dataset.value = isGolden ? baseValue * 5 : baseValue;
shape.dataset.golden = isGolden;
shape.addEventListener('click', (e) => {
e.stopPropagation();
this.clickShape(shape);
});
this.gameArea.appendChild(shape);
this.shapes.push(shape);
if(this.settings.animations && !this.settings.potato) {
this.animateShape(shape);
if(this.shapeEvolution) this.evolveShape(shape);
}
}

animateShape(shape) {
if(!this.gameArea.contains(shape)) return;
let x = parseFloat(shape.style.left);
let y = parseFloat(shape.style.top);
let vx = parseFloat(shape.dataset.vx);
let vy = parseFloat(shape.dataset.vy);
const maxX = this.gameArea.offsetWidth - shape.offsetWidth;
const maxY = this.gameArea.offsetHeight - shape.offsetHeight;
if(x <= 0 || x >= maxX) vx *= -1;
if(y <= 0 || y >= maxY) vy *= -1;
x += vx;
y += vy;
x = Math.max(0, Math.min(maxX, x));
y = Math.max(0, Math.min(maxY, y));
shape.style.left = `${x}px`;
shape.style.top = `${y}px`;
requestAnimationFrame(() => this.animateShape(shape));
}

evolveShape(shape) {
if(!this.gameArea.contains(shape)) return;
const age = (Date.now() - parseInt(shape.dataset.spawnTime)) / 1000;
const newLevel = Math.floor(age / 5) + 1;
if(newLevel > parseInt(shape.dataset.evolution) && newLevel <= 5) {
shape.dataset.evolution = newLevel;
shape.classList.add('shape-evolved');
shape.dataset.value = parseInt(shape.dataset.value) * 1.2;
shape.textContent = `+${newLevel}`;
}
setTimeout(() => this.evolveShape(shape), 1000);
}

spawnInitialShapes() {
for(let i = 0; i < Math.min(3, this.maxShapes); i++) {
setTimeout(() => this.spawnShape(), i * 200);
}
}

spawnOrb() {
if(this.settings.potato) return;
const orb = document.createElement('div');
orb.className = 'multiplier-orb';
orb.textContent = '2x';
const x = Math.random() * (this.gameArea.offsetWidth - 40);
const y = Math.random() * (this.gameArea.offsetHeight - 40);
orb.style.left = `${x}px`;
orb.style.top = `${y}px`;
orb.addEventListener('click', () => {
this.buffs.double = true;
setTimeout(() => {this.buffs.double = false; this.updateBuffs();}, 10000);
this.updateBuffs();
this.showNotification('⚡ 2x Multiplier for 10 seconds!');
this.logAction("Orb Collected: 2x PP");
orb.remove();
this.orbs = this.orbs.filter(o => o !== orb);
});
this.gameArea.appendChild(orb);
this.orbs.push(orb);
setTimeout(() => {
if(orb.parentNode) orb.remove();
this.orbs = this.orbs.filter(o => o !== orb);
}, 15000);
}

clickShape(shape) {
const baseValue = parseInt(shape.dataset.value);
const isGolden = shape.dataset.golden === 'true';
const type = shape.dataset.type;
this.stats.totalClicks++;
this.stats.shapesClicked++;
if(isGolden) this.stats.goldenClicked++;
if(this.collection[type]) {
this.collection[type].count++;
this.renderCollection();
}
if(this.chainCombos) {
if(type === this.chain.type) {
this.chain.count++;
this.chain.multiplier = 1 + (this.chain.count * 0.2);
if(this.chain.count >= 3) {
this.showNotification(`🔗 Chain x${this.chain.count}! +${Math.floor((this.chain.multiplier-1)*100)}%`);
this.logAction(`Chain Combo x${this.chain.count}`);
}
} else {
this.chain.type = type;
this.chain.count = 1;
this.chain.multiplier = 1;
}
}
const now = Date.now();
if(now - this.lastClickTime < 800) {
this.combo = Math.min(this.combo + 0.2, 20);
if(this.combo > this.stats.bestCombo) this.stats.bestCombo = this.combo;
} else {
this.combo = 1;
this.chain.count = 0;
this.chain.multiplier = 1;
}
this.lastClickTime = now;
let isCrit = false;
let critMult = 1;
let critChance = this.critChance + (this.collection.gold.count >= 50 ? 0.1 : 0);
if(Math.random() < critChance) {
isCrit = true;
critMult = 3;
this.stats.critHits++;
this.playSound('crit');
this.logAction("Critical Hit! 3x Damage");
if(this.settings.screenEffects) {
this.gameArea.style.boxShadow = '0 0 30px rgba(255,107,107,0.8)';
setTimeout(() => this.gameArea.style.boxShadow = '', 200);
}
}
let gain = baseValue * this.clickPower * this.clickMultiplier * this.combo * critMult * this.chain.multiplier * this.prestigeMult;
if(this.buffs.double) gain *= 2;
if(this.powerUps.fever.active) gain *= 2;
if(this.powerUps.golden.active && isGolden) gain *= 2;
gain = Math.floor(gain);
if(isCrit) gain *= 3;
this.PP += gain;
this.stats.totalPP += gain;
this.updateChallenges('click', 1);
this.updateChallenges('pp', gain);
if(this.combo >= 5) this.updateChallenges('combo5', 1);
if(this.settings.particles && !this.settings.potato) {
this.createParticles(shape, isGolden);
}
this.createFloatingText(shape, gain, isCrit);
this.playSound(isGolden ? 'golden' : 'click');
this.checkAchievements();
shape.remove();
this.shapes = this.shapes.filter(s => s !== shape);
setTimeout(() => this.spawnShape(), 150);
this.updateUI();
}

createFloatingText(shape, amount, isCrit) {
if(this.settings.potato || !this.settings.animations) return;
const rect = shape.getBoundingClientRect();
const gameRect = this.gameArea.getBoundingClientRect();
const text = document.createElement('div');
text.className = 'floating-text';
text.textContent = `+${amount.toLocaleString()}`;
text.style.color = isCrit ? '#FF6B6B' : '#00F0FF';
text.style.fontSize = isCrit ? '20px' : '16px';
const x = rect.left - gameRect.left + rect.width/2;
const y = rect.top - gameRect.top;
text.style.left = `${x}px`;
text.style.top = `${y}px`;
this.gameArea.appendChild(text);
setTimeout(() => text.remove(), 1000);
}

createParticles(shape, isGolden) {
const rect = shape.getBoundingClientRect();
const gameRect = this.gameArea.getBoundingClientRect();
for(let i = 0; i < 6; i++) {
const particle = document.createElement('div');
particle.className = 'particle';
particle.style.background = isGolden ? '#FFD700' : '#B159FF';
const x = rect.left - gameRect.left + rect.width/2;
const y = rect.top - gameRect.top + rect.height/2;
particle.style.left = `${x}px`;
particle.style.top = `${y}px`;
const tx = (Math.random() - 0.5) * 60;
const ty = (Math.random() - 0.5) * 60 - 30;
particle.animate([
{transform:'translate(0,0)', opacity:1},
{transform:`translate(${tx}px,${ty}px)`, opacity:0}
], {duration:500, easing:'ease-out'});
this.gameArea.appendChild(particle);
setTimeout(() => particle.remove(), 500);
}
}

startGameLoops() {
setInterval(() => {
if(this.autoClickers > 0) {
const gain = this.autoClickers * this.autoClickerMultiplier * this.prestigeMult;
this.PP += Math.floor(gain);
this.stats.totalPP += Math.floor(gain);
this.updateChallenges('pp', Math.floor(gain));
this.updateUI();
}
}, 1000);
setInterval(() => {
const pps = this.buildings.reduce((sum, b) => sum + (b.pps * b.count), 0);
if(pps > 0) {
const gain = pps * this.prestigeMult;
this.PP += Math.floor(gain);
this.stats.totalPP += Math.floor(gain);
this.updateChallenges('pp', Math.floor(gain));
this.updateUI();
}
}, 1000);
setInterval(() => {
if(this.shapes.length < this.maxShapes && !this.bossActive) {
this.spawnShape();
}
}, 800);
setInterval(() => {
if(this.orbs.length < 2 && Math.random() < 0.3) {
this.spawnOrb();
}
}, 30000);
setInterval(() => {
if(Math.random() < (this.feverMode ? 0.04 : 0.02)) {
this.triggerEvent();
}
}, 3000);
setInterval(() => {
if(this.combo > 1 && Date.now() - this.lastClickTime > 1500) {
this.combo = Math.max(1, this.combo - 0.3);
this.updateUI();
}
}, 500);
setInterval(() => {
this.stats.playTime++;
this.checkAchievements();
}, 1000);
setInterval(() => this.saveGame(), 30000);
setInterval(() => this.resetDailyChallenges(), 86400000);
}

triggerEvent() {
const events = [
{name:'⚡ Double PP',effect:()=>{this.buffs.double=true;setTimeout(()=>{this.buffs.double=false;this.updateBuffs();},5000);this.updateBuffs();this.logAction("Event: Double PP");}},
{name:'🌟 Shape Burst',effect:()=>{for(let i=0;i<3;i++)setTimeout(()=>this.spawnShape(),i*100);this.logAction("Event: Shape Burst");}},
{name:'💰 PP Bonus',effect:()=>{const bonus=50*this.prestigeMult;this.PP+=Math.floor(bonus);this.stats.totalPP+=Math.floor(bonus);this.showNotification(`+${Math.floor(bonus)} PP Bonus!`);this.logAction(`Event: PP Bonus +${Math.floor(bonus)}`);}},
{name:'👹 Boss Spawn',effect:()=>{this.spawnBoss();this.logAction("Event: Boss Spawn");}}
];
const event = events[Math.floor(Math.random() * events.length)];
event.effect();
this.showNotification(event.name);
}

spawnBoss() {
this.bossActive = true;
this.bossMaxHealth = 1000 * (1 + this.prestige * 0.5);
this.bossHealth = this.bossMaxHealth;
document.getElementById('boss-health-bar').style.display = 'block';
document.getElementById('boss-health-fill').style.width = '100%';
const boss = document.createElement('div');
boss.className = 'game-shape shape-boss';
boss.style.width = '100px';
boss.style.height = '100px';
boss.style.left = '50%';
boss.style.top = '50%';
boss.style.transform = 'translate(-50%, -50%)';
boss.innerHTML = '👹';
boss.dataset.value = 5000;
boss.addEventListener('click', (e) => {
e.stopPropagation();
this.damageBoss(100 * this.clickPower);
});
this.gameArea.appendChild(boss);
this.showNotification('👹 NEON BOSS! Click to damage!');
}

damageBoss(damage) {
this.bossHealth -= damage;
const percent = Math.max(0, (this.bossHealth / this.bossMaxHealth) * 100);
document.getElementById('boss-health-fill').style.width = `${percent}%`;
if(this.bossHealth <= 0) {
this.defeatBoss();
}
}

defeatBoss() {
this.bossActive = false;
document.getElementById('boss-health-bar').style.display = 'none';
const reward = 5000 * this.prestigeMult;
this.PP += reward;
this.stats.totalPP += reward;
this.showNotification(`🎉 BOSS DEFEATED! +${Math.floor(reward)} PP`);
this.logAction(`Boss Defeated! +${Math.floor(reward)} PP`);
this.playSound('prestige');
document.querySelectorAll('.shape-boss').forEach(b => b.remove());
for(let i = 0; i < 5; i++) setTimeout(() => this.spawnShape(), i * 100);
}

buyShopItem(itemId) {
const item = this.shopItems.find(i => i.id === itemId);
if(!item) return;
const cost = this.getShopCost(item);
const level = this.levels[item.id] || 0;
if(item.maxLevel && level >= item.maxLevel) return;
if(this.PP < cost) return;
this.PP -= cost;
this.levels[item.id] = level + 1;
switch(itemId) {
case 'clickPower': this.clickPower++; break;
case 'autoClicker': this.autoClickers++; break;
case 'maxShapes': this.maxShapes++; break;
case 'goldenChance': this.goldenChance = Math.min(0.3, this.goldenChance + 0.05); break;
case 'critChance': this.critChance = Math.min(0.25, this.critChance + 0.03); break;
}
this.showNotification(`✅ ${item.name} Upgraded!`);
this.logAction(`Bought: ${item.name} (Lv.${level + 1})`);
this.playSound('purchase');
this.renderShop();
this.updateUI();
this.saveGame();
}

buyUpgradeItem(upgradeId) {
const upgrade = this.upgradeItems.find(u => u.id === upgradeId);
if(!upgrade) return;
const cost = this.getUpgradeCost(upgrade);
if(upgrade.purchased && !upgrade.level) return;
if(this.PP < cost) return;
this.PP -= cost;
if(upgrade.level) {
upgrade.level++;
} else {
upgrade.purchased = true;
}
switch(upgradeId) {
case 'shapeVariety': this.shapeVariety = true; this.shapeTypes = ['circle','square','triangle','star']; break;
case 'feverMode': this.feverMode = true; break;
case 'critChance': this.critChance = Math.min(0.25, this.critChance + 0.03); break;
case 'chainCombos': this.chainCombos = true; break;
case 'shapeEvolution': this.shapeEvolution = true; break;
case 'rainbowSkin': this.rainbowSkin = true; break;
case 'autoClickerMultiplier': this.autoClickerMultiplier *= 2; break;
case 'clickMultiplier': this.clickMultiplier *= 2; break;
}
this.showNotification(`✅ ${upgrade.name} ${upgrade.level ? `Upgraded to Lv.${upgrade.level}` : 'Purchased'}!`);
this.logAction(`Bought Upgrade: ${upgrade.name}`);
this.playSound('purchase');
this.renderUpgrades();
this.updateUI();
this.saveGame();
}

setupBuyButtons() {
document.querySelectorAll('.buy-btn[data-shop]').forEach(btn => {
btn.addEventListener('click', () => {
this.buyShopItem(btn.dataset.shop);
});
});
document.querySelectorAll('.buy-btn[data-upgrade-item]').forEach(btn => {
btn.addEventListener('click', () => {
this.buyUpgradeItem(btn.dataset.upgradeItem);
});
});
}

setupPowerUps() {
this.powerUpsBar.innerHTML = `
<button class="powerup-btn fever" id="powerup-fever" disabled>🔥 Fever (500 PP)</button>
<button class="powerup-btn golden" id="powerup-golden" disabled>⭐ Golden (1000 PP)</button>
<button class="powerup-btn crit" id="powerup-crit" disabled>🎲 Crit (400 PP)</button>
<button class="powerup-btn" id="powerup-timewarp" disabled style="background:rgba(0,240,255,0.3);border:1px solid #00F0FF;color:#00F0FF;">⏰ Time Warp (2000 PP)</button>
`;
document.getElementById('powerup-fever').addEventListener('click', () => this.activatePowerUp('fever'));
document.getElementById('powerup-golden').addEventListener('click', () => this.activatePowerUp('golden'));
document.getElementById('powerup-crit').addEventListener('click', () => this.activatePowerUp('crit'));
document.getElementById('powerup-timewarp').addEventListener('click', () => this.activatePowerUp('timeWarp'));
}

activatePowerUp(type) {
const powerUp = this.powerUps[type];
if(this.PP < powerUp.cost || powerUp.active) return;
this.PP -= powerUp.cost;
powerUp.active = true;
this.showNotification(`⚡ ${type.toUpperCase()} Activated for ${powerUp.duration}s!`);
this.logAction(`PowerUp Activated: ${type}`);
setTimeout(() => {
powerUp.active = false;
this.showNotification(`${type.toUpperCase()} Ended`);
}, powerUp.duration * 1000);
}

setupPrestige() {
document.getElementById('prestige-btn').addEventListener('click', () => {
const requirement = 1000 * Math.pow(1.5, this.prestige);
if(this.PP < requirement) {
this.showNotification(`❌ Need ${requirement.toLocaleString()} PP!`);
return;
}
if(!confirm(`Prestige for +50% permanent multiplier?
Current: ${this.prestigeMult.toFixed(1)}x
New: ${(this.prestigeMult*1.5).toFixed(1)}x`)) return;
this.prestige++;
this.prestigeMult = Math.pow(1.5, this.prestige);
this.stats.prestigeCount++;
this.PP = 0;
this.combo = 1;
this.clickPower = 1;
this.autoClickers = 0;
this.maxShapes = 3;
this.goldenChance = 0;
this.shapeVariety = false;
this.feverMode = false;
this.critChance = 0;
this.chainCombos = false;
this.shapeEvolution = false;
this.rainbowSkin = false;
this.clickMultiplier = 1;
this.autoClickerMultiplier = 1;
this.levels = {clickPower:0,autoClicker:0,maxShapes:0,goldenChance:0,shapeVariety:0,feverMode:0,critChance:0,chainCombos:0,shapeEvolution:0,rainbowSkin:0,autoClickerMultiplier:0,clickMultiplier:0};
this.upgradeItems.forEach(u => {u.purchased = false; u.level = 0;});
this.buildings.forEach(b => b.count = 0);
this.shapes.forEach(s => s.remove());
this.shapes = [];
const ach = this.achievements.find(a => a.id === 'prestige1');
if(ach) ach.current = this.prestige;
this.checkAchievements();
this.spawnInitialShapes();
this.updateUI();
this.renderShop();
this.renderUpgrades();
this.renderBuildings();
this.saveGame();
this.showNotification(`✨ Prestige Complete! ${this.prestigeMult.toFixed(1)}x Multiplier`);
this.logAction("Prestige Activated");
this.playSound('prestige');
});
}

checkAchievements() {
this.achievements.forEach(ach => {
if(!ach) return;
const totalBuildings = this.buildings.reduce((sum, b) => sum + b.count, 0);
if(ach.id === 'buildings10') ach.current = totalBuildings;
ach.tiers.forEach((tier, index) => {
if(!tier.unlocked && ach.current >= tier.req) {
tier.unlocked = true;
this.showNotification(`🏆 ${ach.name} ${['Bronze','Silver','Gold','Diamond'][index]}!`);
this.logAction(`Achievement: ${ach.name}`);
this.playSound('purchase');
}
});
});
this.renderAchievements();
}

renderAchievements() {
const tierNames = ['bronze','silver','gold','diamond'];
this.achievementsGrid.innerHTML = this.achievements.map(ach => {
if(!ach || !ach.name) return '';
const highestTier = ach.tiers.filter(t => t.unlocked).length - 1;
return `
<div class="achievement ${highestTier >= 0 ? 'unlocked' : 'locked'}">
<div class="ach-icon">${ach.icon}</div>
<div class="ach-name">${ach.name}</div>
<div class="ach-desc">${ach.desc}</div>
${highestTier >= 0 ? `<div class="ach-tier ${tierNames[highestTier]}">${tierNames[highestTier].toUpperCase()}</div>` : ''}
</div>
`;
}).join('');
}

renderStats() {
const cps = this.stats.playTime > 0 ? (this.stats.totalClicks / this.stats.playTime).toFixed(2) : 0;
const hours = Math.floor(this.stats.playTime / 3600);
const minutes = Math.floor((this.stats.playTime % 3600) / 60);
this.statsGrid.innerHTML = `
<div class="stat-item"><h4>Total Clicks</h4><p>${this.stats.totalClicks.toLocaleString()}</p></div>
<div class="stat-item"><h4>Total PP Earned</h4><p>${this.stats.totalPP.toLocaleString()}</p></div>
<div class="stat-item"><h4>Shapes Clicked</h4><p>${this.stats.shapesClicked.toLocaleString()}</p></div>
<div class="stat-item"><h4>Golden Clicked</h4><p>${this.stats.goldenClicked.toLocaleString()}</p></div>
<div class="stat-item"><h4>Critical Hits</h4><p>${this.stats.critHits.toLocaleString()}</p></div>
<div class="stat-item"><h4>Best Combo</h4><p>x${this.stats.bestCombo.toFixed(1)}</p></div>
<div class="stat-item"><h4>Prestige Count</h4><p>${this.stats.prestigeCount}</p></div>
<div class="stat-item"><h4>Play Time</h4><p>${hours}h ${minutes}m</p></div>
<div class="stat-item"><h4>Clicks/Second</h4><p>${cps}</p></div>
<div class="stat-item"><h4>PP/Second</h4><p>${(this.autoClickers * this.autoClickerMultiplier + this.buildings.reduce((s,b)=>s+(b.pps*b.count),0)).toLocaleString()}</p></div>
`;
}

updateChallenges(type, amount) {
[...this.challenges.daily, ...this.challenges.weekly].forEach(challenge => {
if(!challenge.claimed) {
if(type === 'click' && challenge.name.includes('Click')) challenge.progress += amount;
if(type === 'pp' && challenge.name.includes('PP')) challenge.progress += amount;
if(type === 'combo5' && challenge.name.includes('combo')) challenge.progress += amount;
}
});
this.renderChallenges();
}

renderChallenges() {
this.challengesList.innerHTML = `
<h4 style="color:#00F0FF;margin-bottom:10px;">Daily Challenges</h4>
${this.challenges.daily.map(c => this.renderChallengeItem(c)).join('')}
<h4 style="color:#B159FF;margin:15px 0 10px;">Weekly Challenges</h4>
${this.challenges.weekly.map(c => this.renderChallengeItem(c)).join('')}
`;
document.querySelectorAll('.claim-challenge').forEach(btn => {
btn.addEventListener('click', () => {
const challengeId = btn.dataset.id;
const challenge = [...this.challenges.daily, ...this.challenges.weekly].find(c => c.id === challengeId);
if(challenge && challenge.progress >= challenge.goal && !challenge.claimed) {
challenge.claimed = true;
this.PP += challenge.reward;
this.showNotification(`🎁 Challenge Complete! +${challenge.reward} PP`);
this.logAction(`Challenge Complete: ${challenge.name}`);
this.renderChallenges();
}
});
});
}

renderChallengeItem(challenge) {
const percent = Math.min(100, (challenge.progress / challenge.goal) * 100);
const canClaim = challenge.progress >= challenge.goal && !challenge.claimed;
return `
<div class="challenge-item">
<div class="challenge-header">
<span class="challenge-name">${challenge.name}</span>
<span class="challenge-reward">+${challenge.reward} PP</span>
</div>
<div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
${canClaim ? `<button class="claim-challenge buy-btn" data-id="${challenge.id}" style="margin-top:8px;width:100%;">Claim Reward</button>` : ''}
${challenge.claimed ? `<p style="font-size:11px;color:#00F0FF;margin-top:5px;">✅ Claimed</p>` : ''}
</div>
`;
}

resetDailyChallenges() {
const now = Date.now();
this.challenges.daily.forEach(c => {
if(now - c.reset > 86400000) {
c.progress = 0;
c.claimed = false;
c.reset = now;
}
});
}

renderCollection() {
this.collectionGrid.innerHTML = Object.entries(this.collection).map(([type, data]) => {
const unlocked = data.count >= data.unlockReq;
return `
<div class="collection-item ${unlocked || data.unlockReq === 0 ? '' : 'locked'}">
<div class="collection-icon">${type === 'gold' ? '⭐' : type === 'circle' ? '🔵' : type === 'square' ? '🟣' : type === 'triangle' ? '🔺' : '⭐'}</div>
<div class="collection-name">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
<div class="collection-count">${data.count} clicked</div>
${unlocked ? `<div class="collection-bonus">${data.bonus}</div>` : `<div class="collection-bonus" style="color:#FF6B6B">Unlock at ${data.unlockReq}</div>`}
</div>
`;
}).join('');
}

renderBuildings() {
if(!this.buildingsList) return;
this.buildingsList.innerHTML = this.buildings.map(b => {
if(!b || !b.name) return '';
const cost = Math.floor(b.baseCost * Math.pow(1.2, b.count));
const canBuy = this.PP >= cost;
return `
<div class="building-item">
<div class="building-info">
<h4>${b.name}</h4>
<p>${b.pps} PP/sec | Owned: ${b.count}</p>
</div>
<div style="text-align:right;">
<div class="building-count">${cost.toLocaleString()} PP</div>
<button class="buy-btn" data-building="${b.id}" ${!canBuy ? 'disabled' : ''}>Buy</button>
</div>
</div>
`;
}).join('');
document.querySelectorAll('.buy-btn[data-building]').forEach(btn => {
btn.addEventListener('click', () => this.buyBuilding(btn.dataset.building));
});
}

buyBuilding(buildingId) {
const building = this.buildings.find(b => b.id === buildingId);
if(!building) return;
const cost = Math.floor(building.baseCost * Math.pow(1.2, building.count));
if(this.PP < cost) return;
this.PP -= cost;
building.count++;
this.showNotification(`✅ ${building.name} Purchased!`);
this.logAction(`Bought Building: ${building.name}`);
this.playSound('purchase');
this.checkAchievements();
this.renderBuildings();
this.saveGame();
}

renderThemes() {
this.themeSelector.innerHTML = this.themes.map(theme => `
<div class="theme-option ${this.settings.theme === theme.id ? 'active' : ''}" data-theme="${theme.id}">
<div class="theme-preview" style="background:${theme.colors.bg}"></div>
<div class="theme-name">${theme.name}</div>
</div>
`).join('');
document.querySelectorAll('.theme-option').forEach(opt => {
opt.addEventListener('click', () => {
this.settings.theme = opt.dataset.theme;
const theme = this.themes.find(t => t.id === this.settings.theme);
this.gameArea.style.background = theme.colors.bg;
this.gameArea.style.borderColor = theme.colors.border;
this.renderThemes();
this.saveGame();
});
});
}

checkStreak() {
const today = new Date().toDateString();
const lastClaim = new Date(this.streak.lastClaim).toDateString();
const diff = Math.floor((new Date(today) - new Date(lastClaim)) / 86400000);
if(diff === 1) {
this.streak.current++;
} else if(diff > 1) {
this.streak.current = 1;
}
if(this.streak.current > 0) {
const streakEl = document.getElementById('streak-display');
if(streakEl) {
streakEl.style.display = 'block';
streakEl.innerHTML = `
<h4>🔥 Login Streak: ${this.streak.current} Days</h4>
<div class="streak-days">
${[1,2,3,4,5,6,7].map(d => `
<div class="streak-day ${d <= this.streak.current ? 'claimed' : ''} ${d === 1 ? 'today' : ''}">${d}</div>
`).join('')}
</div>
${this.streak.current >= 7 ? '<p style="color:#FFD700;margin-top:8px;font-size:12px;">🎁 7-day bonus ready!</p>' : ''}
`;
}
}
}

checkOfflineProgress() {
const now = Date.now();
const lastSave = parseInt(localStorage.getItem('neon_lastSave') || now);
const secondsAway = (now - lastSave) / 1000;
if(secondsAway > 60) {
const pps = this.autoClickers * this.autoClickerMultiplier + this.buildings.reduce((s,b) => s + (b.pps * b.count), 0);
const earned = Math.min(pps * secondsAway, pps * 28800);
if(earned > 0) {
const offlineEl = document.getElementById('offline-modal');
const earningsEl = document.getElementById('offline-earnings');
if(offlineEl && earningsEl) {
earningsEl.textContent = `+${Math.floor(earned).toLocaleString()} PP`;
offlineEl.style.display = 'block';
document.getElementById('claim-offline').addEventListener('click', () => {
this.PP += Math.floor(earned);
this.stats.totalPP += Math.floor(earned);
offlineEl.style.display = 'none';
this.showNotification(`⏰ Claimed ${Math.floor(earned).toLocaleString()} PP from offline progress!`);
this.logAction(`Offline Progress: +${Math.floor(earned)} PP`);
this.updateUI();
});
}
}
}
}

setupImportExport() {
document.getElementById('export-save').addEventListener('click', () => {
const save = btoa(JSON.stringify(this.getSaveData()));
document.getElementById('save-code').value = `NEON-${save.substring(0, 100)}`;
this.showNotification('📋 Save code generated! Copy it.');
});
document.getElementById('import-save').addEventListener('click', () => {
const code = document.getElementById('save-code').value.trim();
if(code.startsWith('NEON-')) {
try {
const save = JSON.parse(atob(code.replace('NEON-','')));
this.loadSaveData(save);
this.showNotification('✅ Save imported successfully!');
this.logAction("Save Imported");
this.updateUI();
} catch(e) {
this.showNotification('❌ Invalid save code!');
}
} else {
this.showNotification('❌ Invalid save code format!');
}
});
document.getElementById('reset-save').addEventListener('click', () => {
if(confirm('⚠️ Reset ALL progress? This cannot be undone!')) {
localStorage.removeItem('neon_save');
localStorage.removeItem('neon_settings');
location.reload();
}
});
}

setupAimTrainer() {
document.getElementById('aim-trainer-btn').addEventListener('click', () => {
document.getElementById('aim-trainer-modal').style.display = 'block';
});
document.getElementById('close-modal').addEventListener('click', () => {
document.getElementById('aim-trainer-modal').style.display = 'none';
});
document.getElementById('start-aim').addEventListener('click', () => {
if(this.PP < 100) {
this.showNotification('❌ Need 100 PP to play!');
return;
}
this.PP -= 100;
this.startAimGame();
});
}

startAimGame() {
const area = document.getElementById('aim-trainer-area');
area.innerHTML = '<div id="aim-timer">30</div><div id="aim-score">0</div>';
document.getElementById('start-aim').style.display = 'none';
let score = 0;
let time = 30;
const spawnTarget = () => {
if(time <= 0) {
const bonus = score * 10;
this.PP += bonus;
this.showNotification(`🎯 Aim Trainer Complete! +${bonus} PP`);
this.logAction(`Aim Trainer: +${bonus} PP`);
document.getElementById('start-aim').style.display = 'block';
return;
}
const target = document.createElement('div');
target.className = 'aim-target';
target.style.left = `${Math.random() * (area.offsetWidth - 50)}px`;
target.style.top = `${Math.random() * (area.offsetHeight - 50)}px`;
target.addEventListener('click', () => {
score++;
document.getElementById('aim-score').textContent = score;
target.remove();
spawnTarget();
});
area.appendChild(target);
setTimeout(() => {if(target.parentNode) target.remove();}, 1000);
};
const timer = setInterval(() => {
time--;
document.getElementById('aim-timer').textContent = time;
if(time > 0) spawnTarget();
}, 1000);
spawnTarget();
}

setupSettings() {
document.getElementById('settings-btn').addEventListener('click', () => {
document.getElementById('settings-modal').style.display = 'block';
document.getElementById('potato-mode').checked = this.settings.potato;
document.getElementById('animations').checked = this.settings.animations;
document.getElementById('particles').checked = this.settings.particles;
document.getElementById('screen-effects').checked = this.settings.screenEffects;
document.getElementById('sounds').checked = this.settings.sounds;
});
document.getElementById('close-settings').addEventListener('click', () => {
document.getElementById('settings-modal').style.display = 'none';
});
document.getElementById('save-settings-btn').addEventListener('click', () => {
this.settings.potato = document.getElementById('potato-mode').checked;
this.settings.animations = document.getElementById('animations').checked;
this.settings.particles = document.getElementById('particles').checked;
this.settings.screenEffects = document.getElementById('screen-effects').checked;
this.settings.sounds = document.getElementById('sounds').checked;
if(this.settings.potato) {
this.settings.animations = false;
this.settings.particles = false;
this.settings.screenEffects = false;
}
if(this.settings.sounds) this.initAudio();
localStorage.setItem('neon_settings', JSON.stringify(this.settings));
document.getElementById('settings-modal').style.display = 'none';
this.showNotification('⚙️ Settings Saved!');
});
}

updateUI() {
this.ppDisplay.textContent = this.PP.toLocaleString();
this.prestigeDisplay.textContent = this.prestige;
this.comboDisplay.textContent = `x${this.combo.toFixed(1)}`;
this.multDisplay.textContent = `${(this.prestigeMult * (this.buffs.double?2:1) * (this.powerUps.fever.active?2:1)).toFixed(1)}x`;
this.prestigeMultDisplay.textContent = `${this.prestigeMult.toFixed(1)}x`;
document.querySelectorAll('.buy-btn[data-shop]').forEach(btn => {
const item = this.shopItems.find(i => i.id === btn.dataset.shop);
if(item) {
const cost = this.getShopCost(item);
const level = this.levels[item.id] || 0;
const atMax = item.maxLevel && level >= item.maxLevel;
btn.disabled = this.PP < cost || atMax;
}
});
document.querySelectorAll('.buy-btn[data-upgrade-item]').forEach(btn => {
const upgrade = this.upgradeItems.find(u => u.id === btn.dataset.upgradeItem);
if(upgrade) {
const cost = this.getUpgradeCost(upgrade);
btn.disabled = this.PP < cost || (upgrade.purchased && !upgrade.level);
}
});
document.querySelectorAll('.buy-btn[data-building]').forEach(btn => {
const building = this.buildings.find(b => b.id === btn.dataset.building);
if(building) {
const cost = Math.floor(building.baseCost * Math.pow(1.2, building.count));
btn.disabled = this.PP < cost;
}
});
const prestigeReq = 1000 * Math.pow(1.5, this.prestige);
document.getElementById('prestige-btn').textContent = `Prestige (Need ${prestigeReq.toLocaleString()} PP)`;
document.getElementById('prestige-btn').disabled = this.PP < prestigeReq;
document.getElementById('powerup-fever').disabled = this.PP < this.powerUps.fever.cost || this.powerUps.fever.active;
document.getElementById('powerup-golden').disabled = this.PP < this.powerUps.golden.cost || this.powerUps.golden.active;
document.getElementById('powerup-crit').disabled = this.PP < this.powerUps.crit.cost || this.powerUps.crit.active;
document.getElementById('powerup-timewarp').disabled = this.PP < this.powerUps.timeWarp.cost || this.powerUps.timeWarp.active;
this.updateBuffs();
this.renderStats();
this.renderBuildings();
this.renderShop();
this.renderUpgrades();
}

updateBuffs() {
this.buffsBar.innerHTML = '';
if(this.buffs.double) this.buffsBar.innerHTML += '<span class="buff-badge gold">⚡ 2x PP</span>';
if(this.powerUps.fever.active) this.buffsBar.innerHTML += '<span class="buff-badge fever">🔥 Fever</span>';
if(this.powerUps.golden.active) this.buffsBar.innerHTML += '<span class="buff-badge gold">⭐ Golden</span>';
if(this.powerUps.crit.active) this.buffsBar.innerHTML += '<span class="buff-badge crit">🎲 Crit</span>';
if(this.combo > 1) this.buffsBar.innerHTML += `<span class="buff-badge chain">🔥 Combo x${this.combo.toFixed(1)}</span>`;
if(this.chainCombos && this.chain.count >= 2) this.buffsBar.innerHTML += `<span class="buff-badge chain">🔗 Chain x${this.chain.count}</span>`;
}

showNotification(message) {
const notif = document.createElement('div');
notif.className = 'event-notification';
notif.textContent = message;
this.notificationArea.appendChild(notif);
setTimeout(() => notif.remove(), 2400);
}

setupTabs() {
document.querySelectorAll('.tab-btn').forEach(btn => {
btn.addEventListener('click', () => {
document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
btn.classList.add('active');
document.getElementById(btn.dataset.tab).classList.add('active');
});
});
}

getSaveData() {
return {
PP: this.PP, prestige: this.prestige, prestigeMult: this.prestigeMult,
clickPower: this.clickPower, autoClickers: this.autoClickers, maxShapes: this.maxShapes,
goldenChance: this.goldenChance, shapeVariety: this.shapeVariety, feverMode: this.feverMode,
critChance: this.critChance, chainCombos: this.chainCombos, shapeEvolution: this.shapeEvolution, rainbowSkin: this.rainbowSkin,
clickMultiplier: this.clickMultiplier, autoClickerMultiplier: this.autoClickerMultiplier,
levels: this.levels, buildings: this.buildings.map(b => ({id:b.id,count:b.count})),
upgradeItems: this.upgradeItems,
stats: this.stats, achievements: this.achievements.map(a => ({id:a.id,current:a.current,tiers:a.tiers.map(t => ({req:t.req,unlocked:t.unlocked}))})),
challenges: this.challenges, collection: this.collection, streak: this.streak,
settings: this.settings, powerUps: this.powerUps, activityLog: this.activityLog
};
}

loadSaveData(data) {
this.PP = data.PP || 0;
this.prestige = data.prestige || 0;
this.prestigeMult = data.prestigeMult || 1;
this.clickPower = data.clickPower || 1;
this.autoClickers = data.autoClickers || 0;
this.maxShapes = data.maxShapes || 3;
this.goldenChance = data.goldenChance || 0;
this.shapeVariety = data.shapeVariety || false;
this.feverMode = data.feverMode || false;
this.critChance = data.critChance || 0;
this.chainCombos = data.chainCombos || false;
this.shapeEvolution = data.shapeEvolution || false;
this.rainbowSkin = data.rainbowSkin || false;
this.clickMultiplier = data.clickMultiplier || 1;
this.autoClickerMultiplier = data.autoClickerMultiplier || 1;
this.levels = data.levels || this.levels;
this.stats = {...this.stats, ...data.stats};
this.settings = {...this.settings, ...data.settings};
this.streak = data.streak || this.streak;
this.powerUps = data.powerUps || this.powerUps;
this.activityLog = data.activityLog || [];
if(data.buildings) {
data.buildings.forEach(saved => {
const def = this.buildings.find(b => b.id === saved.id);
if(def) def.count = saved.count;
});
}
if(data.upgradeItems) {
data.upgradeItems.forEach(saved => {
const def = this.upgradeItems.find(u => u.id === saved.id);
if(def) {
def.purchased = saved.purchased;
def.level = saved.level || 0;
}
});
}
if(data.achievements) {
data.achievements.forEach(saved => {
const def = this.achievements.find(a => a.id === saved.id);
if(def) {
def.current = saved.current;
if(saved.tiers) {
saved.tiers.forEach((st, i) => {
if(def.tiers[i]) def.tiers[i].unlocked = st.unlocked;
});
}
}
});
}
if(data.challenges) {
if(data.challenges.daily) {
data.challenges.daily.forEach(saved => {
const def = this.challenges.daily.find(c => c.id === saved.id);
if(def) { def.progress = saved.progress; def.claimed = saved.claimed; def.reset = saved.reset; }
});
}
if(data.challenges.weekly) {
data.challenges.weekly.forEach(saved => {
const def = this.challenges.weekly.find(c => c.id === saved.id);
if(def) { def.progress = saved.progress; def.claimed = saved.claimed; def.reset = saved.reset; }
});
}
}
if(data.collection) {
Object.keys(data.collection).forEach(key => {
if(this.collection[key]) {
this.collection[key].count = data.collection[key].count;
}
});
}
}

saveGame() {
localStorage.setItem('neon_save', JSON.stringify(this.getSaveData()));
localStorage.setItem('neon_lastSave', Date.now().toString());
if(this.saveIndicator) {
this.saveIndicator.classList.add('visible');
setTimeout(() => this.saveIndicator.classList.remove('visible'), 2000);
}
}

loadGame() {
const save = JSON.parse(localStorage.getItem('neon_save') || '{}');
if(save.PP !== undefined) this.loadSaveData(save);
const settings = JSON.parse(localStorage.getItem('neon_settings') || '{}');
this.settings = {...this.settings, ...settings};
}
}

let game = new UltimateNeonClicker();

document.getElementById('close-game').addEventListener('click', () => {
window.location.href = 'index.html';
});
document.getElementById('close-offline').addEventListener('click', () => {
document.getElementById('offline-modal').style.display = 'none';
});
document.addEventListener('keydown', (e) => {
if(e.key === 'Escape') {
document.getElementById('game-container').style.display = 'none';
document.getElementById('settings-modal').style.display = 'none';
document.getElementById('aim-trainer-modal').style.display = 'none';
document.getElementById('offline-modal').style.display = 'none';
}
});
}
