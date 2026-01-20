import styles from '../styles/utils.module.scss';
import Link from 'next/link';

export default function MenuToggle() {

    function changeNavState() {
        let menuToggle = document.getElementsByClassName('menuToggle');
        let menuNav = document.getElementsByClassName('menuNav');
        let body = document.getElementsByTagName('body');
    
        menuToggle[0].classList.toggle('open');
        menuNav[0].classList.toggle('open');
        body[0].classList.toggle('sticky');
    }

    return (
        <div className="menuToggle" onClick={changeNavState}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}