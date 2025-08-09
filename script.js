// Application State
let currentUser = null;
let currentView = 'dashboard';
let isLogin = true;
let selectedStock = null;
let tradeType = 'buy';

// Mock Data
const mockStocks = [
    {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 175.43,
        change: 2.34,
        changePercent: 1.35,
        volume: 52341234,
        marketCap: '2.85T',
        high: 178.25,
        low: 173.10,
        open: 174.50,
    },
    {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        price: 2834.67,
        change: -15.23,
        changePercent: -0.53,
        volume: 1234567,
        marketCap: '1.75T',
        high: 2850.00,
        low: 2820.45,
        open: 2845.30,
    },
    {
        symbol: 'MSFT',
        name: 'Microsoft Corp.',
        price: 342.56,
        change: 4.87,
        changePercent: 1.44,
        volume: 23456789,
        marketCap: '2.55T',
        high: 345.20,
        low: 340.15,
        open: 341.80,
    },
    {
        symbol: 'TSLA',
        name: 'Tesla Inc.',
        price: 892.45,
        change: 23.67,
        changePercent: 2.72,
        volume: 15678901,
        marketCap: '890B',
        high: 895.30,
        low: 885.20,
        open: 887.60,
    },
];

const mockPortfolio = [
    {
        symbol: 'RELIANCE',
        name: 'Reliance Industries Ltd.',
        shares: 150,
        avgPrice: 2350.00,
        currentPrice: 2456.75,
        totalValue: 368512.50,
        gainLoss: 16012.50,
        gainLossPercent: 4.54,
    },
    {
        symbol: 'TCS',
        name: 'Tata Consultancy Services',
        shares: 50,
        avgPrice: 3720.00,
        currentPrice: 3678.90,
        totalValue: 183945.00,
        gainLoss: -2055.00,
        gainLossPercent: -1.10,
    },
    {
        symbol: 'INFY',
        name: 'Infosys Limited',
        shares: 100,
        avgPrice: 1500.00,
        currentPrice: 1534.25,
        totalValue: 153425.00,
        gainLoss: 3425.00,
        gainLossPercent: 2.28,
    },
    {
        symbol: 'HDFCBANK',
        name: 'HDFC Bank Limited',
        shares: 75,
        avgPrice: 1700.00,
        currentPrice: 1687.50,
        totalValue: 126562.50,
        gainLoss: -937.50,
        gainLossPercent: -0.74,
    },
];

const mockTransactions = [
    {
        id: '1',
        symbol: 'RELIANCE',
        name: 'Reliance Industries Ltd.',
        type: 'buy',
        shares: 100,
        price: 2456.75,
        total: 245675.00,
        date: '2024-01-15T10:30:00Z',
        status: 'completed',
    },
    {
        id: '2',
        symbol: 'TCS',
        name: 'Tata Consultancy Services',
        type: 'sell',
        shares: 5,
        price: 3678.90,
        total: 18394.50,
        date: '2024-01-14T14:22:00Z',
        status: 'completed',
    },
    {
        id: '3',
        symbol: 'INFY',
        name: 'Infosys Limited',
        type: 'buy',
        shares: 50,
        price: 1534.25,
        total: 76712.50,
        date: '2024-01-13T09:45:00Z',
        status: 'completed',
    },
    {
        id: '4',
        symbol: 'HDFCBANK',
        name: 'HDFC Bank Limited',
        type: 'buy',
        shares: 25,
        price: 1687.50,
        total: 42187.50,
        date: '2024-01-12T16:15:00Z',
        status: 'pending',
    },
    {
        id: '5',
        symbol: 'RELIANCE',
        name: 'Reliance Industries Ltd.',
        type: 'sell',
        shares: 50,
        price: 2420.25,
        total: 121012.50,
        date: '2024-01-10T11:20:00Z',
        status: 'cancelled',
    },
];

const marketData = [
    { symbol: 'RELIANCE', name: 'Reliance Industries Ltd.', price: 2456.75, change: 34.50, changePercent: 1.42 },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3678.90, change: -45.20, changePercent: -1.21 },
    { symbol: 'INFY', name: 'Infosys Limited', price: 1534.25, change: 18.75, changePercent: 1.24 },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Limited', price: 1687.50, change: -12.30, changePercent: -0.72 },
];

const news = [
    { title: 'Nifty 50 Hits New All-Time High Amid FII Inflows', time: '2 hours ago', category: 'Market News' },
    { title: 'Reliance Industries Reports Strong Q3 Results', time: '4 hours ago', category: 'Earnings' },
    { title: 'RBI Maintains Repo Rate at 6.5%', time: '6 hours ago', category: 'Economic' },
    { title: 'IT Sector Gains on Dollar Strength', time: '8 hours ago', category: 'Technology' },
];

let watchlist = [
    {
        symbol: 'RELIANCE',
        name: 'Reliance Industries Ltd.',
        price: 2456.23,
        change: 23.45,
        changePercent: 0.96,
        volume: 1234567,
        marketCap: '16.58L Cr',
    },
    {
        symbol: 'TCS',
        name: 'Tata Consultancy Services',
        price: 3678.90,
        change: -45.20,
        changePercent: -1.21,
        volume: 1234567,
        marketCap: '13.45L Cr',
    },
];

const availableStocks = [
    {
        symbol: 'INFY',
        name: 'Infosys Limited',
        price: 1534.25,
        change: 18.75,
        changePercent: 1.24,
        volume: 23456789,
        marketCap: '6.35L Cr',
    },
    {
        symbol: 'HDFCBANK',
        name: 'HDFC Bank Limited',
        price: 1687.50,
        change: -12.30,
        changePercent: -0.72,
        volume: 15678901,
        marketCap: '12.78L Cr',
    },
    {
        symbol: 'WIPRO',
        name: 'Wipro Limited',
        price: 456.75,
        change: 8.90,
        changePercent: 1.99,
        volume: 8901234,
        marketCap: '2.45L Cr',
    },
    {
        symbol: 'ICICIBANK',
        name: 'ICICI Bank Limited',
        price: 987.65,
        change: -5.45,
        changePercent: -0.55,
        volume: 5678901,
        marketCap: '6.89L Cr',
    },
];

// Utility Functions
function formatNumber(num) {
    return new Intl.NumberFormat('en-IN').format(num);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function getChangeClass(change) {
    return change >= 0 ? 'gain' : 'loss';
}

function getChangeIcon(change) {
    return change >= 0 ? 'fas fa-trending-up' : 'fas fa-trending-down';
}

// DOM Manipulation Functions
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Show selected view
    document.getElementById(viewName + 'View').classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-view="${viewName}"]`).classList.add('active');
    
    currentView = viewName;
    
    // Load view-specific data
    switch(viewName) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'portfolio':
            loadPortfolio();
            break;
        case 'trading':
            loadTrading();
            break;
        case 'history':
            loadHistory();
            break;
        case 'watchlist':
            loadWatchlist();
            break;
        case 'profile':
            loadProfile();
            break;
    }
}

function loadDashboard() {
    // Load market overview
    const marketOverview = document.getElementById('marketOverview');
    marketOverview.innerHTML = marketData.map(stock => `
        <div class="market-item">
            <div class="market-info">
                <h3>${stock.symbol}</h3>
                <p>${stock.name}</p>
            </div>
            <div class="market-price">
                <div class="price">₹${stock.price.toFixed(2)}</div>
                <div class="change ${getChangeClass(stock.change)}">
                    <i class="${getChangeIcon(stock.change)}"></i>
                    ${stock.change.toFixed(2)} (${stock.changePercent.toFixed(2)}%)
                </div>
            </div>
        </div>
    `).join('');
    
    // Load market news
    const marketNews = document.getElementById('marketNews');
    marketNews.innerHTML = news.map(article => `
        <div class="news-item">
            <h3>${article.title}</h3>
            <div class="news-meta">
                <span class="news-category">${article.category}</span>
                <span>${article.time}</span>
            </div>
        </div>
    `).join('');
}

function loadPortfolio() {
    const tableBody = document.getElementById('portfolioTableBody');
    tableBody.innerHTML = mockPortfolio.map(stock => `
        <tr>
            <td>
                <div class="stock-info">
                    <div class="stock-symbol">${stock.symbol}</div>
                    <div class="stock-name">${stock.name}</div>
                </div>
            </td>
            <td>${formatNumber(stock.shares)}</td>
            <td>₹${stock.avgPrice.toFixed(2)}</td>
            <td>₹${stock.currentPrice.toFixed(2)}</td>
            <td>₹${formatNumber(stock.totalValue)}</td>
            <td class="${getChangeClass(stock.gainLoss)}">₹${formatNumber(stock.gainLoss)}</td>
            <td class="${getChangeClass(stock.gainLoss)}">${stock.gainLossPercent.toFixed(2)}%</td>
        </tr>
    `).join('');
}

function loadTrading() {
    const tableBody = document.getElementById('stocksTableBody');
    tableBody.innerHTML = mockStocks.map(stock => `
        <tr>
            <td>
                <div class="stock-info">
                    <div class="stock-symbol">${stock.symbol}</div>
                    <div class="stock-name">${stock.name}</div>
                </div>
            </td>
            <td>₹${stock.price.toFixed(2)}</td>
            <td>
                <div class="change-indicator ${getChangeClass(stock.change)}">
                    <i class="${getChangeIcon(stock.change)}"></i>
                    ${stock.change.toFixed(2)} (${stock.changePercent.toFixed(2)}%)
                </div>
            </td>
            <td>${formatNumber(stock.volume)}</td>
            <td>
                <button class="btn-primary" onclick="selectStock('${stock.symbol}')">Trade</button>
            </td>
        </tr>
    `).join('');
}

function selectStock(symbol) {
    selectedStock = mockStocks.find(stock => stock.symbol === symbol);
    if (selectedStock) {
        showTradingPanel();
    }
}

function showTradingPanel() {
    const content = document.getElementById('tradingPanelContent');
    content.innerHTML = `
        <div class="trading-form">
            <div class="stock-details">
                <h3>${selectedStock.symbol}</h3>
                <p>${selectedStock.name}</p>
                <div class="stock-price">₹${selectedStock.price.toFixed(2)}</div>
            </div>
            
            <div class="form-group">
                <label>Order Type</label>
                <div class="trade-type-buttons">
                    <button class="trade-type-btn buy ${tradeType === 'buy' ? 'active' : ''}" onclick="setTradeType('buy')">Buy</button>
                    <button class="trade-type-btn sell ${tradeType === 'sell' ? 'active' : ''}" onclick="setTradeType('sell')">Sell</button>
                </div>
            </div>
            
            <div class="form-group">
                <label>Shares</label>
                <input type="number" id="sharesInput" placeholder="Number of shares" oninput="updateOrderSummary()">
            </div>
            
            <div class="form-group">
                <label>Order Type</label>
                <select id="orderType">
                    <option value="market">Market Order</option>
                    <option value="limit">Limit Order</option>
                </select>
            </div>
            
            <div class="order-summary">
                <span class="label">Estimated Total:</span>
                <span class="value" id="estimatedTotal">₹0.00</span>
            </div>
            
            <button class="btn-trade ${tradeType}" id="tradeBtn" onclick="executeTrade()" disabled>
                ${tradeType === 'buy' ? 'Buy' : 'Sell'} ${selectedStock.symbol}
            </button>
        </div>
    `;
}

function setTradeType(type) {
    tradeType = type;
    showTradingPanel();
}

function updateOrderSummary() {
    const shares = document.getElementById('sharesInput').value;
    const total = shares && selectedStock ? (parseInt(shares) * selectedStock.price).toFixed(2) : '0.00';
    document.getElementById('estimatedTotal').textContent = `₹${total}`;
    
    const tradeBtn = document.getElementById('tradeBtn');
    tradeBtn.disabled = !shares || shares <= 0;
}

function executeTrade() {
    const shares = document.getElementById('sharesInput').value;
    if (!shares || !selectedStock || !currentUser) return;
    
    const shareCount = parseInt(shares);
    const totalCost = shareCount * selectedStock.price;
    
    if (tradeType === 'buy' && totalCost > currentUser.balance) {
        alert('Insufficient funds');
        return;
    }
    
    // Update user balance
    const newBalance = tradeType === 'buy' 
        ? currentUser.balance - totalCost 
        : currentUser.balance + totalCost;
    
    currentUser.balance = newBalance;
    updateUserDisplay();
    
    alert(`${tradeType === 'buy' ? 'Bought' : 'Sold'} ${shareCount} shares of ${selectedStock.symbol} for ₹${totalCost.toFixed(2)}`);
    
    // Reset form
    document.getElementById('sharesInput').value = '';
    updateOrderSummary();
}

function loadHistory() {
    const tableBody = document.getElementById('historyTableBody');
    tableBody.innerHTML = mockTransactions.map(transaction => `
        <tr>
            <td>${formatDate(transaction.date)}</td>
            <td>
                <div class="stock-info">
                    <div class="stock-symbol">${transaction.symbol}</div>
                    <div class="stock-name">${transaction.name}</div>
                </div>
            </td>
            <td>
                <div class="change-indicator ${transaction.type === 'buy' ? 'gain' : 'loss'}">
                    <i class="fas fa-trending-${transaction.type === 'buy' ? 'up' : 'down'}"></i>
                    ${transaction.type.toUpperCase()}
                </div>
            </td>
            <td>${formatNumber(transaction.shares)}</td>
            <td>₹${transaction.price.toFixed(2)}</td>
            <td>₹${transaction.total.toFixed(2)}</td>
            <td>
                <div class="status-indicator">
                    <i class="fas fa-${getStatusIcon(transaction.status)}"></i>
                    <span class="status-badge ${transaction.status}">${transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}</span>
                </div>
            </td>
        </tr>
    `).join('');
}

function getStatusIcon(status) {
    switch (status) {
        case 'completed': return 'check-circle';
        case 'pending': return 'exclamation-circle';
        case 'cancelled': return 'times-circle';
        default: return 'circle';
    }
}

function loadWatchlist() {
    // Load current watchlist
    const watchlistBody = document.getElementById('watchlistTableBody');
    watchlistBody.innerHTML = watchlist.map(stock => `
        <tr>
            <td>
                <div class="stock-info">
                    <div class="stock-symbol">${stock.symbol}</div>
                    <div class="stock-name">${stock.name}</div>
                </div>
            </td>
            <td>₹${stock.price.toFixed(2)}</td>
            <td>
                <div class="change-indicator ${getChangeClass(stock.change)}">
                    <i class="${getChangeIcon(stock.change)}"></i>
                    ${stock.change.toFixed(2)} (${stock.changePercent.toFixed(2)}%)
                </div>
            </td>
            <td>${formatNumber(stock.volume)}</td>
            <td>${stock.marketCap}</td>
            <td>
                <button onclick="removeFromWatchlist('${stock.symbol}')" style="color: #dc2626; background: none; border: none; cursor: pointer;">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
    
    // Load available stocks
    const availableBody = document.getElementById('availableStocksTableBody');
    const filteredStocks = availableStocks.filter(stock => 
        !watchlist.some(watched => watched.symbol === stock.symbol)
    );
    
    availableBody.innerHTML = filteredStocks.map(stock => `
        <tr>
            <td>
                <div class="stock-info">
                    <div class="stock-symbol">${stock.symbol}</div>
                    <div class="stock-name">${stock.name}</div>
                </div>
            </td>
            <td>₹${stock.price.toFixed(2)}</td>
            <td>
                <div class="change-indicator ${getChangeClass(stock.change)}">
                    <i class="${getChangeIcon(stock.change)}"></i>
                    ${stock.change.toFixed(2)} (${stock.changePercent.toFixed(2)}%)
                </div>
            </td>
            <td>${formatNumber(stock.volume)}</td>
            <td>${stock.marketCap}</td>
            <td>
                <button class="btn-primary" onclick="addToWatchlist('${stock.symbol}')">Add</button>
            </td>
        </tr>
    `).join('');
}

function addToWatchlist(symbol) {
    const stock = availableStocks.find(s => s.symbol === symbol);
    if (stock) {
        watchlist.push(stock);
        loadWatchlist();
    }
}

function removeFromWatchlist(symbol) {
    watchlist = watchlist.filter(stock => stock.symbol !== symbol);
    loadWatchlist();
}

function loadProfile() {
    if (currentUser) {
        document.getElementById('profileName').textContent = currentUser.name;
        document.getElementById('profileEmail').textContent = currentUser.email;
        document.getElementById('profileBalance').textContent = formatNumber(currentUser.balance);
        document.getElementById('profilePortfolioValue').textContent = formatNumber(currentUser.portfolioValue);
        
        document.getElementById('profileNameInput').value = currentUser.name;
        document.getElementById('profileEmailInput').value = currentUser.email;
    }
}

function updateUserDisplay() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userBalance').textContent = formatNumber(currentUser.balance);
        document.getElementById('welcomeName').textContent = currentUser.name;
        document.getElementById('portfolioValue').textContent = formatNumber(currentUser.portfolioValue);
        document.getElementById('availableBalance').textContent = formatNumber(currentUser.balance);
        document.getElementById('totalGainLoss').textContent = formatNumber(currentUser.totalGainLoss);
        document.getElementById('performance').textContent = currentUser.totalGainLossPercent.toFixed(2);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    const toggleAuth = document.getElementById('toggleAuth');
    const loginBtn = document.getElementById('loginBtn');
    const loginSubtext = document.getElementById('loginSubtext');
    const nameField = document.getElementById('nameField');
    
    toggleAuth.addEventListener('click', function() {
        isLogin = !isLogin;
        if (isLogin) {
            toggleAuth.textContent = "Don't have an account? Sign up";
            loginBtn.textContent = 'Sign in';
            loginSubtext.textContent = 'Sign in to your account';
            nameField.classList.add('hidden');
        } else {
            toggleAuth.textContent = 'Already have an account? Sign in';
            loginBtn.textContent = 'Create Account';
            loginSubtext.textContent = 'Create your account';
            nameField.classList.remove('hidden');
        }
    });
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(loginForm);
        
        currentUser = {
            id: '1',
            name: formData.get('name') || 'Rajesh Kumar',
            email: formData.get('email') || 'rajesh@example.com',
            balance: 500000,
            portfolioValue: 1250000,
            totalGainLoss: 125000,
            totalGainLossPercent: 11.11,
        };
        
        document.getElementById('loginContainer').classList.add('hidden');
        document.getElementById('appContainer').classList.remove('hidden');
        
        updateUserDisplay();
        showView('dashboard');
    });
    
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            showView(view);
        });
    });
    
    // Logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        currentUser = null;
        document.getElementById('appContainer').classList.add('hidden');
        document.getElementById('loginContainer').classList.remove('hidden');
        loginForm.reset();
    });
    
    // Search functionality
    document.getElementById('stockSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#stocksTableBody tr');
        
        rows.forEach(row => {
            const symbol = row.querySelector('.stock-symbol').textContent.toLowerCase();
            const name = row.querySelector('.stock-name').textContent.toLowerCase();
            
            if (symbol.includes(searchTerm) || name.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
    
    // History filters
    document.getElementById('historySearch').addEventListener('input', filterHistory);
    document.getElementById('typeFilter').addEventListener('change', filterHistory);
    document.getElementById('statusFilter').addEventListener('change', filterHistory);
    
    // Watchlist search
    document.getElementById('watchlistSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#availableStocksTableBody tr');
        
        rows.forEach(row => {
            const symbol = row.querySelector('.stock-symbol').textContent.toLowerCase();
            const name = row.querySelector('.stock-name').textContent.toLowerCase();
            
            if (symbol.includes(searchTerm) || name.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
    
    // Profile editing
    document.getElementById('editProfileBtn').addEventListener('click', function() {
        const inputs = document.querySelectorAll('#profileForm input');
        const isEditing = this.textContent === 'Edit';
        
        inputs.forEach(input => {
            input.disabled = !isEditing;
        });
        
        if (isEditing) {
            this.textContent = 'Cancel';
            document.getElementById('profileFormActions').classList.remove('hidden');
        } else {
            this.textContent = 'Edit';
            document.getElementById('profileFormActions').classList.add('hidden');
            loadProfile(); // Reset form
        }
    });
    
    document.getElementById('profileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (currentUser) {
            currentUser.name = document.getElementById('profileNameInput').value;
            currentUser.email = document.getElementById('profileEmailInput').value;
            updateUserDisplay();
        }
        
        // Reset edit mode
        document.getElementById('editProfileBtn').textContent = 'Edit';
        document.getElementById('profileFormActions').classList.add('hidden');
        document.querySelectorAll('#profileForm input').forEach(input => {
            input.disabled = true;
        });
    });
});

function filterHistory() {
    const searchTerm = document.getElementById('historySearch').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    
    const rows = document.querySelectorAll('#historyTableBody tr');
    
    rows.forEach(row => {
        const symbol = row.querySelector('.stock-symbol').textContent.toLowerCase();
        const name = row.querySelector('.stock-name').textContent.toLowerCase();
        const type = row.cells[2].textContent.toLowerCase().includes('buy') ? 'buy' : 'sell';
        const status = row.querySelector('.status-badge').textContent.toLowerCase();
        
        const matchesSearch = symbol.includes(searchTerm) || name.includes(searchTerm);
        const matchesType = typeFilter === 'all' || type === typeFilter;
        const matchesStatus = statusFilter === 'all' || status === statusFilter;
        
        if (matchesSearch && matchesType && matchesStatus) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}