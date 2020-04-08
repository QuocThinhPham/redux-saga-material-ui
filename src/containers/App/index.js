import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configStore from './../../redux/configStore';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../../commons/Theme/index';
import TaskBoard from './../TaskBoard';
import GlobalLoading from './../../components/GlobalLoading';
import ModalForm from './../../components/ModalForm';

const store = configStore();

class App extends Component {
   // constructor(props) {
   //    super(props);
   //    this.wrapper = React.createRef();
   // }
	render() {
		return (
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <ToastContainer />
               <GlobalLoading />
               <ModalForm />
               <TaskBoard />
            </ThemeProvider>
         </Provider>
		);
	}
}

export default App;
