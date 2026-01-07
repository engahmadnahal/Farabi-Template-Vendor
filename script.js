// Chart Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeChart();
});

// Chart Initialization
function initializeChart() {
    const canvas = document.getElementById('revenueChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.clientWidth - 48;
    const height = 200;
    
    canvas.width = width;
    canvas.height = height;
    
    // Sample data
    const data = [
        { day: 'Mon', value: 3200 },
        { day: 'Tue', value: 4100 },
        { day: 'Wed', value: 3800 },
        { day: 'Thu', value: 5200 },
        { day: 'Fri', value: 4800 },
        { day: 'Sat', value: 6100 },
        { day: 'Sun', value: 5500 }
    ];
    
    const maxValue = Math.max(...data.map(d => d.value));
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const barWidth = chartWidth / data.length - 10;
    
    // Draw grid
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    // Draw bars with gradient
    data.forEach((item, index) => {
        const barHeight = (item.value / maxValue) * chartHeight;
        const x = padding + (chartWidth / data.length) * index + 5;
        const y = height - padding - barHeight;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, y, 0, height - padding);
        gradient.addColorStop(0, '#6366F1');
        gradient.addColorStop(1, '#818CF8');
        
        // Draw bar
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw rounded top
        ctx.beginPath();
        ctx.arc(x + barWidth / 2, y, barWidth / 2, Math.PI, 0, false);
        ctx.fill();
        
        // Draw value on top
        ctx.fillStyle = '#111827';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('$' + (item.value / 1000).toFixed(1) + 'k', x + barWidth / 2, y - 8);
        
        // Draw day label
        ctx.fillStyle = '#6B7280';
        ctx.font = '11px Inter';
        ctx.fillText(item.day, x + barWidth / 2, height - padding + 20);
    });
}

// Window resize handler for chart
window.addEventListener('resize', function() {
    const canvas = document.getElementById('revenueChart');
    if (canvas) {
        initializeChart();
    }
});
