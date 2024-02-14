<<<<<<< HEAD
class Report {
    constructor(id, category, customerId, description, labels, owner, assignedTo, createdAt, editedAt, closedAt, state, priority, comments, closeReason, references) {
        this.id = id;
        this.category = category;
        this.customerId = customerId;
        this.description = description;
        this.labels = labels || [];
        this.owner = owner;
        this.assignedTo = assignedTo;
        this.createdAt = createdAt;
        this.editedAt = editedAt;
        this.closedAt = closedAt;
        this.state = state;
        this.priority = priority;
        this.comments = comments || [];
        this.closeReason = closeReason;
        this.references = references || [];
    }

    // Methoden zum Setzen von Eigenschaften
    setDescription(description) {
        this.description = description;
    }

    // Weitere Methoden zum Setzen und Abrufen von Eigenschaften ...

    // Exportieren der Klasse
    module

}
=======
const report = {
    id: '2412',
    category: "Feedback",
    customerId: "1234",
    description: "This is a description",
    labels: ["label1", "label2"],
    owner: "Product Manager",
    assignedTo: "Jens Reiner",
    createdAt: "2020-01-01:12:00:00",
    editedAt: "2020-01-01:12:00:00",
    closedAt: "2020-01-01:12:00:00",
    state: "Open",
    priority: 1,
    comments: [
      {
        author: "Jens Reiner",
        message: "This is a comment",
        createdAt: "2020-01-01:12:00:00",
        type: 'developer',
      },
    ],
    closeReason: "This is a close reason",
    references: [
      {
        type: "github",
        url: "",
        issueNumber: 1
      }
    ]
  };
>>>>>>> 9af342cf57ad13fb12de7c64613ec1a6addb95e1
