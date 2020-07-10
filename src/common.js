import { Alert, Platform } from 'react-native';

const server = Platform.OS === 'IOS' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

function showError(error) {
    Alert.alert('Ops! Houve um erro!', `Erro: ${error}`);
}

function showSuccess(msg) {
    Alert.alert(msg);
}

export { server, showError, showSuccess }