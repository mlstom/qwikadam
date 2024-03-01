import { component$, useContext } from '@builder.io/qwik';
import { MyState } from '~/routes/layout';

export const Cart = component$(() => {
    const globalState = useContext(MyState)
    return <div class="fixed right-0 top-28  bg-[#F9FAFB] w-[350px] z-20">
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 relative">
            <div class="absolute top-6 right-6 cursor-pointer" onClick$={()=>globalState.openCart = false} >X</div>
            <h1 class="text-2xl font-semibold mb-4">Shopping bag(1)</h1>
            <div class="flex items-center mb-4">
                <img width={50} height={50} src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="Pukka Night Time" class="w-16 h-16 object-cover rounded-lg"/>
                    <div class="ml-4 flex-grow">
                        <p class="text-lg font-semibold">Night Time</p>
                        <div class="flex items-center mt-2">
                            <button class="text-gray-500 hover:text-teal-500 focus:outline-none">
                                A
                            </button>
                            <span class="mx-2">2</span>
                            <button class="text-gray-500 hover:text-teal-500 focus:outline-none">
                                B
                            </button>
                        </div>
                        <p class="text-gray-600 mt-2">£4.99</p>
                    </div>
                <div class="text-gray-500 hover:text-[#D1001C] focus:outline-none" >C </div>
            </div>
            <div class="border-t border-gray-300 mt-4 pt-4">
                <p class="text-lg font-semibold">Subtotal:</p>
                <p class="text-xl font-semibold text-teal-500">£9.98</p>
            </div>
            <div class="mt-6 flex justify-between">
                <button class="text-teal-500 hover:underline focus:outline-none">Continue shopping</button>
                <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 focus:outline-none">Checkout</button>
            </div>
        </div>
    </div>
});