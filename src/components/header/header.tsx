import { component$, useStore, useContext } from '@builder.io/qwik';

import Image from "~/images/logo-white-text.png"
import { LinkComp } from './hovercomponents/linkComp';
import { Cart } from '../cart/cart';
import { MyState } from '~/routes/layout';

export const Header = component$(() => {
    const linkNiz = [
        { image: false, name: 'Shop', link: '#', openBox: true },
        { image: false, name: 'Gifts', link: '#', openBox: true },
        { image: false, name: 'Join the collective', link: '#', openBox: false },
        { image: true, name: 'Logo', link: '#', openBox: false },
        { image: false, name: 'Dosha quiz', link: '#', openBox: false },
        { image: false, name: 'Wellbeing', link: '#', openBox: true },
        { image: false, name: 'About Us', link: '#', openBox: true }
    ]
    const cartItemsLength = 1
    const globalState = useContext(MyState)
    const state = useStore({
        openSearch:false
    })
    return <nav class="flex items-center justify-around p-4 bg-[#004851] h-28 relative ">
        <div class=" lg:flex hidden items-center space-x-4 ">
            {linkNiz.map((linkEl, ind) => <LinkComp linkEl={linkEl} key={ind} />)}
        </div>
        <div class="lg:hidden flex justify-center items-center text-white ">
            L
            <div class="overflow-hidden"> <img class="hover:scale-90" src={Image} height={100} width={100}  /> </div>
        </div>
        <div class="flex items-center space-x-4">
            <div class="text-white  flex items-center">
                {state.openSearch && <input type='text' />}
                <div class="hover:scale-90 cursor-pointer p-3" onClick$={()=>state.openSearch = !state.openSearch}>SIO</div>
            </div>
            <div  class="text-white relative p-3">
            <div class="hover:scale-90 cursor-pointer " onClick$={()=>globalState.openCart = !globalState.openCart}>B</div>
                {cartItemsLength>0 &&  <span class="absolute top-0 right-0 bg-[#EE6D9F] rounded-full w-4 h-4 flex justify-center items-center p-2"><p>1</p></span>}
            </div>
            <div class="text-white hidden lg:block">
                <div class="hover:scale-90 cursor-pointer p-3" onClick$={()=>state.openSearch = !state.openSearch}>P</div>
            </div>
        </div>
        {globalState.openCart && <Cart />}
    </nav>

});