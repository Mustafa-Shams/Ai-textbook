import React from 'react';

export default function ProgressTracker({progress, totalPages}) {
  const completedPages = Object.keys(progress).length;
  const percentage = totalPages > 0 ? (completedPages / totalPages) * 100 : 0;

  return (
    <div style={{marginBottom: '1rem'}}>
      <strong>Progress:</strong>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div
          style={{
            width: '100%',
            backgroundColor: '#eee',
            borderRadius: '5px',
            marginRight: '1rem',
          }}>
          <div
            style={{
              width: `${percentage}%`,
              height: '20px',
              backgroundColor: 'var(--ifm-color-primary)',
              borderRadius: '5px',
            }}
          />
        </div>
        <span>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
}
