const instructors = [
  // Ski monitoren
  { id: "i-stefan", name: "Stefan Auer", initials: "SA", branchIds: ["ski"], specialties: ["red_racoons", "black_bears", "yellow"], languages: ["DE", "EN", "NL"], rating: 4.9, status: "available", role: "monitor" },
  { id: "i-lieke", name: "Lieke Bakker", initials: "LB", branchIds: ["ski"], specialties: ["blue_bunnies", "red_racoons"], languages: ["NL", "EN"], rating: 4.7, status: "available", role: "monitor" },
  { id: "i-jonas", name: "Jonas Wirth", initials: "JW", branchIds: ["ski"], specialties: ["green", "blue_bunnies"], languages: ["DE", "NL"], rating: 4.5, status: "available", role: "monitor" },
  { id: "i-aniek", name: "Aniek Smit", initials: "AS", branchIds: ["ski", "school"], specialties: ["blue_bunnies", "red_racoons"], languages: ["NL"], rating: 4.6, status: "busy", role: "monitor" },
  { id: "i-erik", name: "Erik Vogel", initials: "EV", branchIds: ["ski"], specialties: ["black_bears", "yellow"], languages: ["DE", "EN"], rating: 4.8, status: "available", role: "monitor" },
  { id: "i-maud", name: "Maud Vermeulen", initials: "MV", branchIds: ["ski"], specialties: ["green"], languages: ["NL", "FR"], rating: 4.4, status: "available", role: "monitor" },
  { id: "i-lars", name: "Lars Janssens", initials: "LJ", branchIds: ["ski"], specialties: ["green", "blue_bunnies"], languages: ["NL", "EN"], rating: 4.5, status: "available", role: "monitor" },
  { id: "i-anne", name: "Anne Peeters", initials: "AP", branchIds: ["ski"], specialties: ["red_racoons", "black_bears"], languages: ["NL", "FR", "EN"], rating: 4.7, status: "available", role: "monitor" },
  { id: "i-arnout", name: "Arnout De Smet", initials: "AD", branchIds: ["ski"], specialties: ["black_bears", "yellow"], languages: ["NL", "EN", "FR"], rating: 4.9, status: "busy", role: "coordinator" },
  // Surf
  { id: "i-yara", name: "Yara Mensah", initials: "YM", branchIds: ["surf"], specialties: ["beginner", "intermediate"], languages: ["NL", "EN"], rating: 4.9, status: "available" },
  { id: "i-tomas", name: "Tomas Ribeiro", initials: "TR", branchIds: ["surf"], specialties: ["intermediate", "advanced", "pro"], languages: ["PT", "EN"], rating: 4.8, status: "busy" },
  { id: "i-fenna", name: "Fenna de Bruin", initials: "FB", branchIds: ["surf"], specialties: ["beginner"], languages: ["NL", "DE"], rating: 4.7, status: "available" },
  { id: "i-noah", name: "Noah Visser", initials: "NV", branchIds: ["surf", "corporate"], specialties: ["beginner", "intermediate"], languages: ["NL", "EN"], rating: 4.6, status: "available" },
  { id: "i-mila", name: "Mila Costa", initials: "MC", branchIds: ["surf"], specialties: ["advanced", "pro"], languages: ["PT", "EN", "ES"], rating: 4.9, status: "off" },
  // School
  { id: "i-marit", name: "Marit Jansen", initials: "MJ", branchIds: ["school"], specialties: ["beginner", "intermediate"], languages: ["NL"], rating: 4.6, status: "available" },
  { id: "i-pim", name: "Pim Bergsma", initials: "PB", branchIds: ["school"], specialties: ["beginner"], languages: ["NL", "EN"], rating: 4.4, status: "available" },
  { id: "i-saar", name: "Saar Dijkstra", initials: "SD", branchIds: ["school"], specialties: ["intermediate"], languages: ["NL"], rating: 4.7, status: "available" },
  // Corporate
  { id: "i-ravi", name: "Ravi Patel", initials: "RP", branchIds: ["corporate"], specialties: ["beginner", "intermediate"], languages: ["EN", "NL"], rating: 4.8, status: "available" },
  { id: "i-eva", name: "Eva Bosch", initials: "EB", branchIds: ["corporate"], specialties: ["intermediate", "advanced"], languages: ["NL", "EN", "DE"], rating: 4.9, status: "busy" }
];
function getInstructor(id) {
  if (!id) return void 0;
  return instructors.find((i) => i.id === id);
}
function instructorsForBranch(branchId) {
  return instructors.filter((i) => i.branchIds.includes(branchId));
}

export { getInstructor as g, instructorsForBranch as i };
