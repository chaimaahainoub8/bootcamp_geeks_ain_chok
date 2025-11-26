import React from 'react';
const data = {
  SocialMedias: ["https://github.com", "https://linkedin.com", "https://facebook.com"],
  Skills: [
    { Area: "Programming Language", SkillSet: [{ Name: "Java" }, { Name: "C#" }] },
    { Area: "Web-Based Application Development", SkillSet: [{ Name: "JavaScript" }, { Name: "React" }] }
  ],
  Experiences: [
    { companyName: "Demo1 Technologies", roles: [{ title: "Full Stack Developer", description: "Built Chrome Extensions" }] }
  ]
};

class Exercise3 extends React.Component {
  render() {
    return (
      <div className="border p-3 mb-3">
        <h5>Ex 3: Complex JSON</h5>
        <ul>{data.SocialMedias.map((url, i) => <li key={i}>{url}</li>)}</ul>
        {data.Skills.map((area, i) => (
          <div key={i}><strong>{area.Area}</strong>: {area.SkillSet.map(s => s.Name).join(", ")}</div>
        ))}
      </div>
    );
  }
}
export default Exercise3;