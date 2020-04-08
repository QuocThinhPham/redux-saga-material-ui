const styles = () => ({
   loadingOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99,
      background: 'rgba(0,0,0,0.2)'
   },
   icon: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 70
   }
});

export default styles;
