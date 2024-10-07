export default async function handler(req, res) {
  console.log("API handler called");

  const KEYWORD = '居酒屋';
  //自分でかえる
  const key = "dcc44453a6e74fef";
  try {
    const response = await fetch(
      `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${key}&keyword=${KEYWORD}&count=3&large_area=Z023&format=json`
    );

    if (!response.ok) {
      console.log("Failed to fetch data from external API");
      res
        .status(response.status)
        .json({ error: "Failed to fetch data from external API" });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
