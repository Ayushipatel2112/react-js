import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          size: 12,
          weight: '500',
        },
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'white',
      bodyColor: 'white',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      cornerRadius: 8,
      displayColors: true,
      callbacks: {
        label: function(context) {
          return context.dataset.label + ': ' + context.parsed.y.toLocaleString() + ' users';
        }
      }
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 11,
          weight: '500',
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
      ticks: {
        font: {
          size: 11,
        },
        callback: function(value) {
          return value.toLocaleString();
        }
      },
    },
  },
  animation: {
    duration: 1000,
    easing: 'easeOutQuart',
  },
};

const labels = ['Mobile', 'Desktop', 'Tablet', 'Smart TV', 'Other'];

const data = {
  labels,
  datasets: [
    {
      label: 'Active Users',
      data: [4500, 3200, 1800, 800, 300],
      backgroundColor: '#667eea',
      borderColor: '#667eea',
      borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false,
    },
    {
      label: 'New Users',
      data: [2200, 1800, 900, 300, 100],
      backgroundColor: '#f5576c',
      borderColor: '#f5576c',
      borderWidth: 1,
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
};

function BarChartComponent() {
  return <Bar options={options} data={data} />;
}

export default BarChartComponent;