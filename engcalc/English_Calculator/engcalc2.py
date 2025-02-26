#GODHELPME INDUSTRIES(C) ENGLISH CALCULATOR 2.0
import random

#words list
with open("words/nouns.txt", "r") as f:
    nouns = [w.strip() for w in f.readlines()]
with open("words/verbs.txt", "r") as f:
    verbs = [w.strip() for w in f.readlines()]
with open("words/adnouns.txt", "r") as f:
    adnouns = [w.strip() for w in f.readlines()]
with open("words/adverbs.txt", "r") as f:
    adverbs = [w.strip() for w in f.readlines()]

#word type selection
def choicesfunc(xyz):
    xyz = xyz.lower().strip()
    if xyz == "noun" or xyz == "n":
        return(random.choice(nouns))
    elif xyz == "verb" or xyz == "v":
        return(random.choice(verbs))
    elif xyz.lower().strip() == "adjective" or xyz.lower().strip() == "an":
        return(random.choice(adnouns))
    elif xyz == "adverb" or xyz == "av":
        return(random.choice(adverbs))

#thanks Book
n = int(input("how many words? ").strip())
output = []
for i in range(n):
    t = input("noun, verb, adjective or adverb? ")
    output.append(choicesfunc(t))

print("The " + str(" ".join(output)) + ".")

K = input("press return to close.")
