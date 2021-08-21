const facts_me  = [
    "I don't snort cocaine.",
    "My favorite book is 'Children of Blood and Bone' by Tomi Adeyemi.",
    "I am currently walking the line between Nihilism and Stoicism.",
    "If we've met before, no we haven't.",
    "I am hungry at the moment (I'm constantly hungry, so this is a given).",
    "My favorite lizard (for now) is the green basilisk lizard because they can run on water."
]
const facts_animal = [
    "The green basilisk lizard can run on water.",
    "Koalas can't recogize food that isn't on the tree.",
    "Koalas eat eucalyptus, which is poisonous. Because they're dumb.",
    "The now extinct giant ground sloths are the reason we have avocados today. They would eat the whole fruit whole and poop out the seeds.",
    "There is a species of jellyfish that is immortal.",
    "Ostriches can run faster than horses.",
    "The Australian military once fought a war against emus. And lost.",
    "Koalas have fingerprints that are very similar to human fingerprints.",
    "A snail can sleep for three years."
]



function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let animalNumber = randomInteger (0, (facts_animal.length -1));
let meNumber = randomInteger (0, (facts_me.length -1));

function generateFunFact(a,b) {
    return (a [b]);
}
let animalFunFact = generateFunFact (facts_animal, animalNumber);
let meFunFact = generateFunFact (facts_me, meNumber);
