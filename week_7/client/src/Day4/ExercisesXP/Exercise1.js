import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  componentDidCatch(error) { this.setState({ hasError: true }); }
  render() {
    if (this.state.hasError) return <h4 className="text-danger">An error has occured.</h4>;
    return this.props.children;
  }
}

const HomeScreen = () => <h5>Home Screen</h5>;
const ProfileScreen = () => <h5>Profile Screen</h5>;
const ShopScreen = () => { throw new Error("Shop Crashed!"); };

const Exercise1 = () => (
  <div className="border p-3 mb-3">
    <h5>Ex 1: Error Boundary & Router</h5>
    <nav className="nav mb-2">
      <NavLink to="home" className="nav-link">Home</NavLink>
      <NavLink to="profile" className="nav-link">Profile</NavLink>
      <NavLink to="shop" className="nav-link text-danger">Shop (Crash)</NavLink>
    </nav>
    <ErrorBoundary>
      <Routes>
        <Route path="home" element={<HomeScreen />} />
        <Route path="profile" element={<ProfileScreen />} />
        <Route path="shop" element={<ShopScreen />} />
      </Routes>
    </ErrorBoundary>
  </div>
);
export default Exercise1;