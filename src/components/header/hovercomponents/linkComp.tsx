import { component$,useStore,$ } from '@builder.io/qwik';
import { HoverShop } from './hoverShop';
import { HoverAbout } from './hoverAbout';
import { HoverWell } from './hoverWell';
import { HoverGifts } from './hoverGifts';
import Image from "~/images/logo-white-text.png"

export interface LinkCompProps {
    linkEl: { image: boolean; name: string; link: string; openBox: boolean };
}
type Element = { image: boolean; name: string; link: string; openBox: boolean }

export const LinkComp = component$<LinkCompProps>(({ linkEl }) => {
    const state = useStore({
        openShop: false,
        openGifts: false,
        openAbout: false,
        openWell: false
    })
    const handleHover = $((el: Element) => {
        switch (el.name) {
            case 'Shop':
                state.openShop = true
                break;
            case 'Gifts':
                state.openGifts = true
                break;
            case 'Wellbeing':
                state.openWell = true
                break;
            case 'About Us':
                state.openAbout = true
                break;
            default:
                break;
        }
    })

    const handleLeave = $((el: Element) => {
        switch (el.name) {
            case 'Shop':
                state.openShop = false
                break;
            case 'Gifts':
                state.openGifts = false
                break;
            case 'Wellbeing':
                state.openWell = false
                break;
            case 'About Us':
                state.openAbout = false
                break;
            default:
                break;
        }
    })

    return <>
        <div class="text-white" onMouseEnter$={() => handleHover(linkEl)} onMouseLeave$={() => handleLeave(linkEl)}>
            {linkEl.image ? <div class="overflow-hidden"> <img class="hover:scale-90" src={Image} height={100} width={100} /> </div>: <a href="#" class="flex gap-1 hover:text-teal-300">{linkEl.name} {linkEl.openBox && <p>v</p>}</a>}
            {state.openShop && <HoverShop />}
            {state.openAbout && <HoverAbout />}
            {state.openWell && <HoverWell />}
            {state.openGifts && <HoverGifts />}
        </div>
    </>
})