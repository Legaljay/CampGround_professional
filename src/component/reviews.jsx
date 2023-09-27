export default function Reviews() {
  const data = [
    {
      name: "Adam jones",
      reviews:
        "Honestly one of the best experiences ever, took us a while to figure out how ton get here , its amazing!",
    },
    {
      name: "Issac Dylan",
      reviews:
        "Travelling changes you as a person, you gain more perspective, this is the perfect spot to do that",
    },
    {
      name: "Hudson Luca",
      reviews:
        "Definately recommend going there, not too far and not a lot of people to ruin your experience.",
    },
  ];
  return (
    <div>{data.map(item=>{
        return(
            
            <div className=" p-6 text-left">
              <h1 className="text-lg font-bold flex">
                {item.name}<label className="font-semibold ml-auto">time</label>
              </h1>
              <p className="
              py-4">
                {item.reviews}
              </p>
              <hr />
            </div>

        )
    })}</div>
  );
}
