import React from 'react';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import './Navigation.css';

function Navigation() {
  return (
    <>
    <MobileNavigation/>
    <DesktopNavigation/>
    </>
  );
}

export default Navigation;