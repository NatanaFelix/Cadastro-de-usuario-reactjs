import React from 'react'
import Home from './components/templetes/Home'
import { Routes, Route } from "react-router-dom";
import UserCrud from './components/user/UserCrud';

export default props =>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<UserCrud />} />
</Routes>