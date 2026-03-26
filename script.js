// ============ PORTFOLIO SCRIPTS (UNCHANGED) ============
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

// ============ ULTIMATE GAME ENGINE (FIXED) ============
if(document.getElementById('game-container')) {
class UltimateNeonClicker {
constructor() {
    this.PP = 0;
    this.prestige = 0;
    this.prestigeMult = 1;
    this.combo = 1;
    this.lastClickTime = 0;
    this.clickPower = 1;
    this.autoClickers = 0;
    this.maxShapes = 3;
    this.goldenChance = 0.05;
    this.shapeVariety = false;
    this.feverMode = false;
    this.critChance = 0;
    this.chainCombos = false;
    this.shapeEvolution = false;
    this.rainbowSkin = false;
    this.autoClickerMultiplier = 1;
    this.clickMultiplier = 1;
    
    this.levels = {clickPower:0,autoClicker:0,maxShapes:0,goldenChance:0,critChance:0};
    this.baseCosts = {clickPower:10,autoClicker:50,maxShapes:100,goldenChance:200,critChance:400};
    
    this.buildings = [
        {id:'script',name:'💻 Code Script',baseCost:500,pps:5,count:0},
        {id:'bot',name:'🤖 Auto Bot',baseCost:2000,pps:25,count:0},
        {id:'server',name:'🖥️ Server Farm',baseCost:10000,pps:150,count:0},
        {id:'ai',name:'🌐 AI Network',baseCost:50000,pps:1000,count:0},
        {id:'cloud',name:'☁️ Cloud Cluster',baseCost:200000,pps:5000,count:0},
        {id:'quantum',name:'⚛️ Quantum Core',baseCost:1000000,pps:25000,count:0}
    ];
    
    this.shopItems = [
        {id:'clickPower',name:'⚡ Click Power +1',desc:'Increase PP per click',baseCost:10,costMult:1.15,maxLevel:100},
        {id:'autoClicker',name:'🤖 Auto Clicker',desc:'+1 PP per second',baseCost:50,costMult:1.15,maxLevel:100},
        {id:'maxShapes',name:'🎯 Max Shapes +1',desc:'More shapes on screen',baseCost:100,costMult:1.25,maxLevel:20},
        {id:'goldenChance',name:'⭐ Golden Chance',desc:'+5% chance for 5x PP',baseCost:200,costMult:1.3,maxLevel:10},
        {id:'critChance',name:'🎲 Critical Hits',desc:'+3% chance for 3x PP',baseCost:400,costMult:1.3,maxLevel:10}
    ];
    
    this.upgradeItems = [
        {id:'shapeVariety',name:'💫 Shape Variety',desc:'Unlock new shape types',baseCost:300,purchased:false},
        {id:'feverMode',name:'⚡ Fever Mode',desc:'Events 2x more often',baseCost:500,purchased:false},
        {id:'chainCombos',name:'🔗 Chain Combos',desc:'Click same type for bonus',baseCost:600,purchased:false},
        {id:'shapeEvolution',name:'🦋 Shape Evolution',desc:'Shapes grow over time',baseCost:800,purchased:false},
        {id:'rainbowSkin',name:'🌈 Rainbow Skin',desc:'Unlock rainbow shape skin',baseCost:1000,purchased:false},
        {id:'autoClickerMultiplier',name:'⚙️ Auto Boost',desc:'Auto clickers 2x more effective',baseCost:1500,purchased:false,level:0},
        {id:'clickMultiplier',name:'💥 Click Boost',desc:'Click power 2x more effective',baseCost:1500,purchased:false,level:0}
    ];
    
    this.settings = {potato:false,animations:true,particles:true,screenEffects:true,sounds:false,theme:'neon'};
    this.stats = {totalClicks:0,totalPP:0,shapesClicked:0,goldenClicked:0,critHits:0,playTime:0,bestCombo:0,prestigeCount:0,startTime:Date.now()};
    
    this.achievements = [
        {id:'first',name:'First Click',desc:'Click your first shape',icon:'👆',tiers:[{req:1,unlocked:false}],current:0},
        {id:'golden',name:'Golden Touch',desc:'Click golden shapes',icon:'⭐',tiers:[{req:1,unlocked:false},{req:10,unlocked:false},{req:50,unlocked:false},{req:100,unlocked:false}],current:0},
        {id:'combo5',name:'Combo x5',desc:'Reach 5x combo',icon:'🔥',tiers:[{req:5,unlocked:false}],current:0},
        {id:'combo10',name:'Combo x10',desc:'Reach 10x combo',icon:'💫',tiers:[{req:10,unlocked:false}],current:0},
        {id:'prestige1',name:'Reborn',desc:'Prestige once',icon:'♻️',tiers:[{req:1,unlocked:false}],current:0},
        {id:'pp1000',name:'Power Up',desc:'Earn total PP',icon:'⚡',tiers:[{req:1000,unlocked:false},{req:10000,unlocked:false},{req:100000,unlocked:false}],current:0},
        {id:'clicks100',name:'Dedicated',desc:'Total clicks',icon:'🎯',tiers:[{req:100,unlocked:false},{req:1000,unlocked:false}],current:0}
    ];
    
    this.challenges = {
        daily: [
            {id:'d1',name:'Click 100 shapes',goal:100,progress:0,reward:200,claimed:false},
            {id:'d2',name:'Reach x5 combo 3x',goal:3,progress:0,reward:150,claimed:false},
            {id:'d3',name:'Earn 5,000 PP',goal:5000,progress:0,reward:300,claimed:false}
        ]
    };
    
    this.collection = {
        circle: {count:0,bonus:'+1% PP',unlockReq:0},
        square: {count:0,bonus:'+2% PP',unlockReq:50},
        triangle: {count:0,bonus:'+5% golden chance',unlockReq:100},
        star: {count:0,bonus:'+10% crit chance',unlockReq:200},
        gold: {count:0,bonus:'+10% crit chance',unlockReq:50}
    };
    
    this.buffs = {};
    this.powerUps = {
        fever: {active:false,cost:500,duration:30},
        golden: {active:false,cost:1000,duration:45},
        crit: {active:false,cost:400,duration:25}
    };
    
    this.shapes = [];
    this.shapeTypes = ['circle'];
    this.orbs = [];
    this.chain = {type:null,count:0,multiplier:1};
    this.activityLog = [];
    this.gameArea = document.getElementById('game-area');
    this.autoClickerInterval = null;
    
    this.loadGame();
    this.init();
}

showNotification(msg) {
    const notif = document.createElement('div');
    notif.className = 'event-notification';
    notif.textContent = msg;
    notif.style.cssText = 'background:linear-gradient(135deg,#B159FF,#00F0FF);color:#000;padding:10px 18px;border-radius:25px;font-weight:600;font-size:13px;margin-bottom:8px;animation:slideDown 0.3s,fadeOut 0.4s 2s forwards;';
    const container = document.getElementById('notification-area');
    if(container) {
        container.appendChild(notif);
        setTimeout(() => notif.remove(), 2500);
    }
    this.logAction(msg);
}

logAction(msg) {
    const time = new Date().toLocaleTimeString();
    this.activityLog.unshift(`[${time}] ${msg}`);
    if(this.activityLog.length > 50) this.activityLog.pop();
    const logEl = document.getElementById('activity-log');
    if(logEl) logEl.innerHTML = this.activityLog.map(l => `<div style="border-bottom:1px solid rgba(255,255,255,0.1);padding:4px 0;">${l}</div>`).join('');
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
    this.checkOfflineProgress();
    this.logAction("🎮 Game Initialized");
}

setupTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });
}

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
        return `<div class="upgrade-item"><div class="upgrade-info"><h4>${item.name} ${level > 0 ? `<span class="upgrade-level">Lv.${level}</span>` : ''}</h4><p>${item.desc}</p></div><div><div class="upgrade-cost">${atMax ? 'MAX' : cost.toLocaleString() + ' PP'}</div><button class="buy-btn" data-shop="${item.id}" ${!canBuy || atMax ? 'disabled' : ''}>Buy</button></div></div>`;
    }).join('');
}

renderUpgrades() {
    const upgradesEl = document.getElementById('upgrades');
    if(!upgradesEl) return;
    upgradesEl.innerHTML = this.upgradeItems.map(up => {
        const purchased = up.purchased;
        const canBuy = this.PP >= up.baseCost;
        return `<div class="upgrade-item"><div class="upgrade-info"><h4>${up.name} ${up.level > 0 ? `Lv.${up.level}` : ''}</h4><p>${up.desc}</p></div><div><div class="upgrade-cost">${purchased ? '✓' : up.baseCost + ' PP'}</div><button class="buy-btn" data-upgrade="${up.id}" ${purchased || !canBuy ? 'disabled' : ''}>Buy</button></div></div>`;
    }).join('');
}

setupBuyButtons() {
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('buy-btn')) {
            const shopId = e.target.dataset.shop;
            const upgradeId = e.target.dataset.upgrade;
            if(shopId) this.buyShop(shopId);
            if(upgradeId) this.buyUpgrade(upgradeId);
        }
    });
}

buyShop(id) {
    const item = this.shopItems.find(i => i.id === id);
    if(!item) return;
    const cost = this.getShopCost(item);
    if(this.PP >= cost && (!item.maxLevel || this.levels[id] < item.maxLevel)) {
        this.PP -= cost;
        this.levels[id]++;
        if(id === 'clickPower') this.clickPower++;
        if(id === 'autoClicker') this.autoClickers++;
        if(id === 'maxShapes') this.maxShapes++;
        if(id === 'goldenChance') this.goldenChance = Math.min(0.5, 0.05 + (this.levels.goldenChance * 0.05));
        if(id === 'critChance') this.critChance = Math.min(0.5, this.levels.critChance * 0.03);
        this.renderShop();
        this.updateUI();
        this.logAction(`Bought ${item.name}`);
        this.saveGame();
    }
}

buyUpgrade(id) {
    const upgrade = this.upgradeItems.find(u => u.id === id);
    if(!upgrade || upgrade.purchased) return;
    if(this.PP >= upgrade.baseCost) {
        this.PP -= upgrade.baseCost;
        upgrade.purchased = true;
        if(id === 'shapeVariety') this.shapeVariety = true;
        if(id === 'feverMode') this.feverMode = true;
        if(id === 'chainCombos') this.chainCombos = true;
        if(id === 'shapeEvolution') this.shapeEvolution = true;
        if(id === 'rainbowSkin') this.rainbowSkin = true;
        this.renderUpgrades();
        this.updateUI();
        this.logAction(`Unlocked ${upgrade.name}`);
        this.saveGame();
    }
}

spawnShape() {
    if(this.shapes.length >= this.maxShapes) return;
    const shape = document.createElement('div');
    shape.className = 'game-shape';
    const types = this.shapeVariety ? ['circle','square','triangle','star'] : ['circle'];
    const type = types[Math.floor(Math.random() * types.length)];
    shape.dataset.type = type;
    const isGolden = Math.random() < this.goldenChance;
    if(isGolden) shape.classList.add('shape-gold');
    else if(this.rainbowSkin) shape.classList.add('shape-rainbow');
    else shape.classList.add(`shape-${type}`);
    
    const size = Math.floor(Math.random() * 30) + 35;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    const maxX = this.gameArea.offsetWidth - size;
    const maxY = this.gameArea.offsetHeight - size;
    shape.style.left = `${Math.random() * maxX}px`;
    shape.style.top = `${Math.random() * maxY}px`;
    shape.dataset.value = Math.floor(size / 5) * (isGolden ? 5 : 1);
    shape.dataset.golden = isGolden;
    
    shape.addEventListener('click', (e) => {
        e.stopPropagation();
        this.clickShape(shape);
    });
    this.gameArea.appendChild(shape);
    this.shapes.push(shape);
}

clickShape(shape) {
    let baseValue = parseInt(shape.dataset.value);
    const isGolden = shape.dataset.golden === 'true';
    const type = shape.dataset.type;
    
    this.stats.totalClicks++;
    this.stats.shapesClicked++;
    if(isGolden) this.stats.goldenClicked++;
    if(this.collection[type]) this.collection[type].count++;
    
    const now = Date.now();
    if(now - this.lastClickTime < 800) this.combo = Math.min(this.combo + 0.2, 20);
    else this.combo = 1;
    this.lastClickTime = now;
    if(this.combo > this.stats.bestCombo) this.stats.bestCombo = this.combo;
    
    let critMult = 1;
    const isCrit = Math.random() < this.critChance;
    if(isCrit) { critMult = 3; this.stats.critHits++; this.showNotification("💥 CRITICAL HIT!"); }
    
    let gain = Math.floor(baseValue * this.clickPower * this.clickMultiplier * this.combo * critMult * this.prestigeMult);
    if(this.buffs.double) gain *= 2;
    
    this.PP += gain;
    this.stats.totalPP += gain;
    
    this.updateChallenges('click', 1);
    this.updateChallenges('pp', gain);
    this.createFloatingText(shape, gain, isCrit);
    shape.remove();
    this.shapes = this.shapes.filter(s => s !== shape);
    setTimeout(() => this.spawnShape(), 100);
    this.updateUI();
    this.checkAchievements();
    this.saveGame();
}

createFloatingText(shape, amount, isCrit) {
    const rect = shape.getBoundingClientRect();
    const text = document.createElement('div');
    text.textContent = `+${amount.toLocaleString()}`;
    text.style.cssText = `position:fixed;left:${rect.left+rect.width/2}px;top:${rect.top}px;color:${isCrit ? '#FF6B6B' : '#0ff'};font-weight:bold;font-size:18px;pointer-events:none;z-index:9999;text-shadow:0 0 5px black;animation:floatUp 1s forwards;`;
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 1000);
}

updateUI() {
    document.getElementById('pp-display').textContent = Math.floor(this.PP).toLocaleString();
    document.getElementById('prestige-display').textContent = this.prestige;
    document.getElementById('combo-display').textContent = `x${this.combo.toFixed(1)}`;
    document.getElementById('mult-display').textContent = `${(this.prestigeMult).toFixed(1)}x`;
    document.getElementById('prestige-mult').textContent = `${(this.prestigeMult).toFixed(1)}x`;
}

startGameLoops() {
    setInterval(() => {
        const income = this.buildings.reduce((sum, b) => sum + (b.count * b.pps), 0) + this.autoClickers;
        if(income > 0) {
            this.PP += income;
            this.updateUI();
        }
    }, 1000);
    
    setInterval(() => {
        if(this.shapes.length < this.maxShapes) this.spawnShape();
    }, 800);
    
    setInterval(() => this.saveGame(), 30000);
}

spawnInitialShapes() {
    for(let i = 0; i < Math.min(3, this.maxShapes); i++) setTimeout(() => this.spawnShape(), i * 200);
}

renderBuildings() {
    const container = document.getElementById('buildings-list');
    if(!container) return;
    container.innerHTML = this.buildings.map(b => {
        const cost = Math.floor(b.baseCost * Math.pow(1.15, b.count));
        const canBuy = this.PP >= cost;
        return `<div class="building-item"><div class="building-info"><h4>${b.name}</h4><p>+${b.pps} PP/sec | Owned: ${b.count}</p></div><div><button class="buy-btn" data-building="${b.id}" ${!canBuy ? 'disabled' : ''}>${cost} PP</button></div></div>`;
    }).join('');
    document.querySelectorAll('[data-building]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.dataset.building;
            const building = this.buildings.find(b => b.id === id);
            const cost = Math.floor(building.baseCost * Math.pow(1.15, building.count));
            if(this.PP >= cost) {
                this.PP -= cost;
                building.count++;
                this.renderBuildings();
                this.updateUI();
                this.saveGame();
                this.logAction(`Bought ${building.name}`);
            }
        });
    });
}

renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    if(!grid) return;
    grid.innerHTML = this.achievements.map(ach => {
        let unlockedTiers = ach.tiers.filter(t => t.unlocked).length;
        return `<div class="achievement ${unlockedTiers > 0 ? 'unlocked' : 'locked'}"><div class="ach-icon">${ach.icon}</div><div class="ach-name">${ach.name}</div><div class="ach-desc">${ach.desc}</div><div class="ach-tier">${unlockedTiers}/${ach.tiers.length}</div></div>`;
    }).join('');
}

renderStats() {
    const grid = document.getElementById('stats-grid');
    if(!grid) return;
    grid.innerHTML = `<div class="stat-item"><h4>Total Clicks</h4><p>${this.stats.totalClicks}</p></div>
    <div class="stat-item"><h4>Total PP Earned</h4><p>${Math.floor(this.stats.totalPP).toLocaleString()}</p></div>
    <div class="stat-item"><h4>Best Combo</h4><p>x${this.stats.bestCombo.toFixed(1)}</p></div>
    <div class="stat-item"><h4>Golden Clicks</h4><p>${this.stats.goldenClicked}</p></div>
    <div class="stat-item"><h4>Critical Hits</h4><p>${this.stats.critHits}</p></div>`;
}

renderChallenges() {
    const container = document.getElementById('challenges-list');
    if(!container) return;
    container.innerHTML = this.challenges.daily.map(ch => {
        const percent = (ch.progress / ch.goal) * 100;
        return `<div class="challenge-item"><div class="challenge-header
