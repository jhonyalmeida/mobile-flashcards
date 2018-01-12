import { StyleSheet } from 'react-native'

export const purple = '#292477'
export const gray = '#757575'
export const white = '#fff'
export const red = '#b71845'
export const orange = '#f26f28'
export const blue = '#4e4cb8'
export const royalBlue = '#4169E1'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    formLabel: {
        fontSize: 16,
        marginLeft: 25
    },
    formField: {
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        marginTop: 0,
        padding: 10,
        alignSelf: 'stretch'
    },
    formButton: {
        padding: 10,
        margin: 20,
        alignSelf: 'flex-end',
        alignItems: 'center',
        minWidth: 150
    },
    formButtonEnabled: {
        backgroundColor: royalBlue
    },
    formButtonDisabled: {
        backgroundColor: 'rgba(65, 105, 225, 0.5)'
    },
    formButtonText: {
        color: white,
        fontWeight: 'bold'
    }
})

export default styles