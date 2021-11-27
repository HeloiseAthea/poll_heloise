from random import random
from functools import partial
from bokeh.layouts import column, row
from bokeh.models import Button, RadioGroup
from bokeh.palettes import RdYlBu3
from bokeh.plotting import figure, curdoc


def main():

    def update_poll(origin, radios, dico, attrname, old, new):

        # Get the levels we are at right now
        level = radios.index(origin)

        # Remove all the radiobutton after the one which changed
        for i in range(level + 1, len(radios)):
            radios[i].labels = []

        # Generate labels for the next one

        # Get the radio dependencies
        tuplo = list(dico.keys())[level+1]
        dependency = tuplo[0]

        print(tuplo)
        print(dependency)

        if type(dependency) is tuple:
            print("tuple")
            values = tuple([radios[i].active for i in dependency])
            print(values)
        else:
            print("nonTuple")
            values = radios[dependency].active
            print(values)

        print(dico[tuplo])
        radios[level + 1].labels = dico[tuplo][values]

    """ Logic Dictionary """

    # Each key shows : (conditions, poll affected)

    interactions = {(0, 0): {None},

                    (0, 1): {0: ["a1", "a2", "a3"], 1: ["b1", "b2", "b3"], 2: ["c1", "c2", "c3"]},

                    (1, 2): {0: ["1_alpha", "1_beta", "1_gamma"], 1: ["2_alpha", "2_beta", "2_gamma"], 2: ["3_alpha", "3_beta", "3_gamma"]},

                    ((0, 1), 3): {(0, 0): ["a1a", "a1b", "a1c"], (0, 1): ["a2a", "a2b", "a2c"], (0, 2): ["a3a", "a3b", "a3c"],
                                  (1, 0): ["b1a", "b1b", "b1c"], (1, 1): ["b2a", "b2b", "b2c"], (1, 2): ["b3a", "b3b", "b3c"],
                                  (2, 0): ["c1a", "c1b", "c1c"], (2, 1): ["c2a", "c2b", "c2c"], (2, 2): ["c3a", "c3b", "c3c"]
                                  }
                    }

    """ Initializing"""
    radio1 = RadioGroup(labels=["a", "b", "c"], active=0)
    radios = [radio1] + [RadioGroup(title="blabla") for _ in range(5)]

    for radio in radios:
        radio.on_change("active", partial(update_poll, radio, radios, interactions))

    """ Layout """
    curdoc().add_root(row(radios))


main()
