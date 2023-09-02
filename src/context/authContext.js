import { createContext, useEffect, useState } from "react";

// buoc 1
const AuthContext = createContext();

// buoc 2 Lấy ra provider
const Provider = AuthContext.Provider;

// buoc 3 Proviedr quanh cai component ma minh can su dung tinh nang context
const initialState = {
    email: '',
    password: '',
    username: '',
};
const AuthProvider = ({ children }) => {
    const [state, setState] = useState(initialState); // Khởi tạo trạng thái và hàm để cập nhật trạng thái

    useEffect(() => {
        const emailState = window.localStorage.getItem('email');
        setState({...state, email: emailState});
    }, []);

    return <Provider value={{ state, setState}}>{children}</Provider>
};

export { AuthContext, AuthProvider };