const styles = theme => ({
   modal: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 'none',
      paddingBottom: 10,
      margin: 0
   },
   paper: {
   },
   title: {
      width: '90%',
      height: '50px',
      margin: 0,
      padding: '0 5%',
      backgroundColor: '#3f51b5',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 20,
      fontWeight: 550
   },
   icons: {
      cursor: 'pointer'
   }
});

export default styles;
