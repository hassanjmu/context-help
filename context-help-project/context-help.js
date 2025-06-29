// Simulated "help database" in JSON format:
const helpData = {
  ospf: {
    DR: "🟢 DR (Designated Router): Elected on multi-access networks to minimize OSPF traffic by acting as the central point for OSPF updates.",
    BDR: "🟡 BDR (Backup Designated Router): Monitors the DR and takes over if the DR fails to maintain network stability."
  },
  acl: {
    "Standard ACL": "🔵 Standard ACL: Filters traffic based only on the source IP address. Applied closer to the destination.",
    "Extended ACL": "🟣 Extended ACL: Filters traffic based on source/destination IP, protocols, and port numbers. Applied closer to the source."
  }
};

function showHelp(topic, keyword) {
  const text = (helpData[topic] && helpData[topic][keyword]) || "❗ Help topic not found.";
  alert(text);
}
