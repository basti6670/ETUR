const { Time } = require("e");

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

    //bei beendigung 
    markAsFinished(reason) { //Dev
        if (this.state !== 'finished') {
            this.state = 'finished';
            this.closedAt = new Date();
            this.closeReason = reason;
        }
    }
    /*
    newReport() { //Kunde
        this.id = id + 1;
        //this.customerId = Lookup auf Kundentabelle
        //this.owner = Absender des Reports?
        //this.assignedTo = Default Jens Reiner
        this.createdAt = new Time();
        this.state = 'unbearbeitet'
    }
    showMyReports() { //Kunde
        //Reports aus Array ziehen
    }
    showReportComment() { //Kunde
        return this.comments, this.closeReason
    }
    archiveReport() { //Kunde
    
    
    markAsFinished() { //Dev
        if (this.state != 'finished');
        this.state = 'finished';
        this.closedAt = new Date();
        //this.closeReason = Eingabe des Bearbeiters / Default = finished
        this.archiveReport();
    } 
    */
}
class KundenReport {
    constructor() {
        this.reports = [];
    }

    // Hinzufügen eines neuen Berichts
    addReport(reportData) {
        const newReport = new Report(reportData);
        this.reports.push(newReport);
        return newReport;
    }

    // Abrufen aller Berichte
    getAllReports() {
        return this.reports;
    }
}