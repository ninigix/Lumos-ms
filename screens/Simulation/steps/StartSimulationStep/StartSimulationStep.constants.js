export default (messages = {
  real: {
    description:
      "When the simulation is running you can't switch light using Lumos app.",
    title: "Real"
  },
  artificial: {
    description:
      "This simulation will be run on a doll house - you'll still be able to use Lumos app.",
    title: "Artificial"
  },
  header: "Choose simulation type",
  choiceTitle: "Choose simulation speed"
});

export const AVAILABLE_SPEEDS = [200, 400, 600];
