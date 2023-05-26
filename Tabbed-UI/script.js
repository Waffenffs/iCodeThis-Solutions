// Add JavaScript code here
// if active, button cannot be unchecked or smth

const button1 = document.getElementById('btn-details')
const button2 = document.getElementById('btn-tutorials')
const button3 = document.getElementById('btn-snippets')
const content = document.getElementById('container')

const disableOtherButtons = (activeButton) => {
    [button1, button2, button3].forEach((val) => {
        if (val !== activeButton) {
            val.classList.remove('bg-white')
            val.classList.remove('rounded-xl')
            val.classList.remove('shadow-xl')
            val.classList.remove('active')
        }
    })
}

const activateButton = (thisButton) => {
    if (!thisButton.classList.contains('active')) {
        thisButton.classList.toggle('bg-white')
        thisButton.classList.toggle('rounded-xl')
        thisButton.classList.toggle('shadow-xl')
        thisButton.classList.toggle('active')
    }
}

button1.addEventListener('click', () => {
    disableOtherButtons(button1)
    activateButton(button1)

    content.innerHTML = `
        <h1 class="text-slate-700 text-xl font-medium">Color Palette</h1>
        <p class="text-sm text-slate-600 mb-6">Click on the color to copy code.</p>

        <ul class="flex flex-wrap max-w-xs gap-3 mb-10">
            <li>
                <button class="flex flex-row gap-2 items-center p-1 bg-white rounded-2xl border">
                                        <div class="bg-[#bac4e0] rounded-full w-7 h-7">&nbsp;</div>
                                        <p class="text-slate-800">#BAC4EO</p>
                                    </button>
            </li>
            <li>
                <button class="flex flex-row gap-2 items-center p-1 bg-white rounded-2xl border">
                                                                    <div class="bg-[#bac4e0] rounded-full w-7 h-7">&nbsp;</div>
                                                                    <p class="text-slate-800">#BAC4EO</p>
                                                                </button>
            </li>
            <li>
                <button class="flex flex-row gap-2 items-center p-1 bg-white rounded-2xl border">
                                                                    <div class="bg-[#bac4e0] rounded-full w-7 h-7">&nbsp;</div>
                                                                    <p class="text-slate-800">#BAC4EO</p>
                                                                </button>
            </li>
            <li>
                <button class="flex flex-row gap-2 items-center p-1 bg-white rounded-2xl border">
                                                                    <div class="bg-[#bac4e0] rounded-full w-7 h-7">&nbsp;</div>
                                                                    <p class="text-slate-800">#BAC4EO</p>
                                                                </button>
            </li>
            <li>
                <button class="flex flex-row gap-2 items-center p-1 bg-white rounded-2xl border">
                                                                    <div class="bg-[#bac4e0] rounded-full w-7 h-7">&nbsp;</div>
                                                                    <p class="text-slate-800">#BAC4EO</p>
                                                                </button>
            </li>
            <li>
                <button class="flex flex-row gap-2 items-center p-1 bg-white rounded-2xl border">
                                                                    <div class="bg-[#bac4e0] rounded-full w-7 h-7">&nbsp;</div>
                                                                    <p class="text-slate-800">#BAC4EO</p>
                                                                </button>
            </li>
        </ul>

        <footer>
            <h1 class="font-medium text-slate-800 text-xl mb-4">Fonts</h1>
            <p class="mb-2 text-slate-800">Muli Regular</p>
            <p class="text-slate-800">Muli Bold</p>
        </footer>
    `
})

button2.addEventListener('click', () => {
    disableOtherButtons(button2)
    activateButton(button2)

    content.innerHTML = `
    <h1 class="font-medium text-slate-800 text-xl">Tutorials</h1>
<p class="text-sm text-slate-600 mb-6">Learn how to build this component.</p>

<h2 class="text-slate-500 font-medium mb-4">HTML/CSS</h2>
<div class="cursor-pointer bg-white shadow-xl p-5 text-slate-800 mb-6">
    <div class="flex flex-row justify-between items-center">
        <h1 class="text-xl font-medium mb-2">Andrew Gabriel</h1>
        <span class="font-bold text-2xl text-slate-700">></span>
    </div>
    <div>
        <p class="text-slate-600">https://youtu.be/UE_-obgiWm0</p>
    </div>
</div>

<div class="cursor-pointer bg-white shadow-xl p-5 text-slate-800 mb-9">
    <div class="flex flex-row justify-between items-center">
        <h1 class="text-xl font-medium mb-2">Andrew Gabriel</h1>
        <span class="font-bold text-2xl text-slate-700">></span>
    </div>
    <div>
        <p class="text-slate-600">https://youtu.be/UE_-obgiWm0</p>
    </div>
</div>

<h1 class="font-bold text-slate-600">React Native</h1>
<div class="cursor-pointer bg-white shadow-xl p-5 text-slate-800 mb-9">
    <div class="flex flex-row justify-between items-center">
        <h1 class="text-xl font-medium mb-2">Andrew Gabriel</h1>
        <span class="font-bold text-2xl text-slate-700">></span>
    </div>
    <div>
        <p class="text-slate-600">https://youtu.be/UE_-obgiWm0</p>
    </div>
</div>

<footer class="text-center text-slate-600">
    <p>Did you make a tutorial with this</p>
    <p>component? <span class="text-pink-500 underline cursor-pointer">Send your link</span> and we will</p>
    <p>post it here.</p>
</footer>
    `
})

button3.addEventListener('click', () => {
    disableOtherButtons(button3)
    activateButton(button3)

    content.innerHTML = `
                        <h1 class="text-slate-800 font-medium text-xl">Code snippets</h1>
                        <p class="text-sm text-slate-700 mb-5">Inspect the solutions others implemented.</p>
                        <div class="cursor-pointer bg-white rounded shadow-xl p-5 mb-5">
                            <div class="flex flex-row justify-between mb-1">
                                <h2 class="text-xl font-medium text-slate-700">Stefan Galescu</h2>
                                <span class="font-bold text-xl text-slate-600">></span>
                            </div>
                            <div>
                                <p class="text-slate-600 w-3/4">https://codepen.io/stefan-galescu/pen/OJMNvPP</p>
                            </div>
                        </div>
                        <div class="cursor-pointer bg-white rounded shadow-xl p-5 mb-8">
                            <div class="flex flex-row justify-between mb-1">
                                <h2 class="text-xl font-medium text-slate-700">Stefan Galescu</h2>
                                <span class="font-bold text-xl text-slate-600">></span>
                            </div>
                            <div>
                                <p class="text-slate-600 w-3/4">https://codepen.io/stefan-galescu/pen/OJMNvPP</p>
                            </div>
                        </div>

                        <footer class="text-center text-slate-700">
                            <p>Did you build this component? <span class="text-pink-500 underline cursor-pointer">send your</p>
                                                <p><span class="cursor-pointer text-pink-500 underline">link</span> and we will post it here.</p>
                        </footer>
    `
})