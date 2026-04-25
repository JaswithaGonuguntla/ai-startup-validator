function analyzeIdea() {
    const idea = document.getElementById("idea").value.toLowerCase();

    if (idea.trim() === "") {
        alert("Please enter your idea!");
        return;
    }

    let strengths = [];
    let weaknesses = [];
    let opportunities = [];
    let threats = [];
    let suggestions = [];
    let score = 70;

    // 🔍 Keyword-based logic
    if (idea.includes("ai") || idea.includes("machine learning")) {
        strengths = ["High innovation", "Future technology"];
        opportunities = ["Growing AI market", "Automation demand"];
        score += 10;
    }

    if (idea.includes("app") || idea.includes("mobile")) {
        strengths.push("Easy user access");
        opportunities.push("Large smartphone audience");
        weaknesses.push("High competition in apps");
    }

    if (idea.includes("health") || idea.includes("fitness")) {
        opportunities.push("Increasing health awareness");
        strengths.push("Social impact");
        threats.push("Regulations and compliance");
    }

    if (idea.includes("ecommerce") || idea.includes("shopping")) {
        strengths.push("High demand");
        threats.push("Strong competitors like Amazon");
        weaknesses.push("Logistics challenges");
    }

    // Default values if empty
    if (strengths.length === 0) strengths = ["Basic idea with potential"];
    if (weaknesses.length === 0) weaknesses = ["Needs refinement"];
    if (opportunities.length === 0) opportunities = ["Growing market"];
    if (threats.length === 0) threats = ["Market competition"];

    suggestions = [
        "Define clear target audience",
        "Validate idea with users",
        "Build MVP (Minimum Viable Product)"
    ];

    // 🎯 Display result
    document.getElementById("result").innerHTML = `
        <h2>📊 Feasibility Score: ${score}/100</h2>

        <h3>💡 SWOT Analysis</h3>
        <p><b>Strengths:</b> ${strengths.join(", ")}</p>
        <p><b>Weaknesses:</b> ${weaknesses.join(", ")}</p>
        <p><b>Opportunities:</b> ${opportunities.join(", ")}</p>
        <p><b>Threats:</b> ${threats.join(", ")}</p>

        <h3>🚀 Suggestions</h3>
        <ul>${suggestions.map(s => `<li>${s}</li>`).join("")}</ul>
    `;
}