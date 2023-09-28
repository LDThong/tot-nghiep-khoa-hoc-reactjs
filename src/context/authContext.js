import { createContext, useEffect, useState } from "react";

// buoc 1
const AuthContext = createContext();

// buoc 2 Lấy ra provider
const Provider = AuthContext.Provider;

// buoc 3 Proviedr quanh cai component ma minh can su dung tinh nang context
const initialState = {
    email: '',
    username: '',
    password: '',
    fullName: '',
    phoneNumber: '',
    id: '',
};
const AuthProvider = ({ children }) => {
    const [state, setState] = useState(initialState); // Khởi tạo trạng thái và hàm để cập nhật trạng thái
    // const [idUser, setIdUser] = useState([]);

    useEffect(() => {
        const usernameState = window.localStorage.getItem('username');
        const idUserState = window.localStorage.getItem('id');
        const emailState = window.localStorage.getItem('email');
        const fullNameState = window.localStorage.getItem('fullName');
        const phoneNumberState = window.localStorage.getItem('phoneNumber');
        const yourBillState = window.localStorage.getItem('yourBill');
        setState({...state, username: usernameState, id: idUserState, email: emailState, fullName: fullNameState, phoneNumber: phoneNumberState});
    }, []);

    return <Provider value={{ state, setState}}>{children}</Provider>
};

export { AuthContext, AuthProvider };