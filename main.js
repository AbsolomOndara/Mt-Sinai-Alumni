// Member data
        const members = [
            { welfareNo: 'MS001', name: 'JOEL ACHOKI', event1: 1000, event2: 200, event3: 0, total: 1200 },
            { welfareNo: 'MS002', name: 'ABSOLOM ONDARA', event1: 1000, event2: 0, event3: 0, total: 1000 },
            { welfareNo: 'MS003', name: 'MARKUSE ONCHABO', event1: 1000, event2: 200, event3: 1000, total: 2200 },
            { welfareNo: 'MS004', name: 'KEVIN MBURU', event1: 500, event2: 0, event3: 0, total: 500 },
            { welfareNo: 'MS005', name: 'NATHAN ONGERA', event1: 1000, event2: 0, event3: 0, total: 1000 },
            { welfareNo: 'MS006', name: 'LYDIA MOSE', event1: 500, event2: 300, event3: 300, total: 1100 },
            { welfareNo: 'MS007', name: 'GEOFFREY OPORE', event1: 500, event2: 200, event3: 0, total: 700 },
            { welfareNo: 'MS008', name: 'SAM OYARO', event1: 1000, event2: 0, event3: 0, total: 1000 },
            { welfareNo: 'MS009', name: 'JANET ONKOBA', event1: 1000, event2: 200, event3: 0, total: 1200 },
            { welfareNo: 'MS010', name: 'VIVIAN ONKOBA', event1: 1000, event2: 200, event3: 500, total: 1700 },
            { welfareNo: 'MS011', name: 'IMMANUE I GITEMBE', event1: 500, event2: 0, event3: 0, total: 500 },
            { welfareNo: 'MS012', name: 'JUDY MOMANYI', event1: 600, event2: 350, event3: 0, total: 950 },
            { welfareNo: 'MS013', name: 'PAULINE BITENGO', event1: 200, event2: 200, event3: 0, total: 400 },
            { welfareNo: 'MS014', name: 'KEVIN MOSORO ONDIEKI', event1: 1000, event2: 200, event3: 0, total: 1200 },
            { welfareNo: 'MS015', name: 'GEOFFREY NYABUTO', event1: 500, event2: 0, event3: 0, total: 500 },
            { welfareNo: 'MS016', name: 'KELVIN OYARO', event1: 500, event2: 0, event3: 0, total: 500 },
            { welfareNo: 'MS017', name: 'ZACHARY NTABO', event1: 1000, event2: 500, event3: 0, total: 1500 },
            { welfareNo: 'MS018', name: 'REHEMA MOKUA', event1: 500, event2: 200, event3: 0, total: 700 },
            { welfareNo: 'MS019', name: 'MILICENT GESARE', event1: 300, event2: 0, event3: 0, total: 300 },
            { welfareNo: 'MS020', name: 'MORGAN MARONGA', event1: 500, event2: 0, event3: 0, total: 500 },
            { welfareNo: 'MS021', name: 'NICOEDMUS OCHANDA', event1: 300, event2: 200, event3: 0, total: 500 },
            { welfareNo: 'MS022', name: 'DOROTHY GESARE', event1: 300, event2: 0, event3: 0, total: 300 },
            { welfareNo: 'MS023', name: 'KEVIN MOMANYI', event1: 200, event2: 200, event3: 0, total: 400 },
            { welfareNo: 'MS024', name: 'EDWIN MAKORI', event1: 200, event2: 0, event3: 0, total: 200 },
            { welfareNo: 'MS025', name: 'VALEDIAN ZACHARY', event1: 200, event2: 0, event3: 0, total: 200 },
            { welfareNo: 'MS026', name: 'VERONICA BITENGO', event1: 0, event2: 200, event3: 0, total: 200 },
            { welfareNo: 'MS027', name: 'JAMES MASINDE', event1: 500, event2: 500, event3: 0, total: 1000 },
            { welfareNo: 'MS028', name: 'VICTOR ORUTA', event1: 300, event2: 300, event3: 0, total: 600 },
            { welfareNo: 'MS029', name: 'SHARON MORAA', event1: 0, event2: 200, event3: 0, total: 200 },
            { welfareNo: 'MS030', name: 'TRUS MOSIRA', event1: 0, event2: 200, event3: 0, total: 200 },
            { welfareNo: 'MS031', name: 'IAN GICHABA', event1: 0, event2: 200, event3: 1000, total: 1200 },
            { welfareNo: 'MS032', name: 'EVERYLINE NYANDIEKA', event1: 0, event2: 200, event3: 0, total: 200 },
            { welfareNo: 'MS033', name: 'VERA KERUBO ORINA', event1: 0, event2: 200, event3: 0, total: 200 },
            { welfareNo: 'MS034', name: 'SHARON NYANDIEKA', event1: 0, event2: 200, event3: 0, total: 200 },
            { welfareNo: 'MS035', name: 'ISALAH OGORA', event1: 0, event2: 200, event3: 0, total: 200 },
            { welfareNo: 'MS036', name: 'KEVIN OPORE', event1: 0, event2: 200, event3: 0, total: 200 },
            { welfareNo: 'MS037', name: 'LYDIA OPORE', event1: 1000, event2: 0, event3: 0, total: 1000 }
        ];

        // Event data
        const events = [
            { id: 1, name: "Event 1", goal: 18500, raised: 17500, progress: 35 },
            { id: 2, name: "Event 2", goal: 11000, raised: 5750, progress: 95 },
            { id: 3, name: "Event 3", goal: 11000, raised: 17100, progress: 105 }
        ];

        // DOM Elements
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('.section');
        const membersTable = document.querySelector('.members-table tbody');
        const welfareNumberInput = document.getElementById('welfare-number');
        const searchMemberBtn = document.getElementById('search-member');
        const downloadIndividualBtn = document.getElementById('download-individual');
        const downloadFullBtn = document.getElementById('download-full');
        const contactForm = document.getElementById('contact-form');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Populate members table
            populateMembersTable();
            
            // Set up event listeners
            setupEventListeners();
        });

        // Populate members table with data
        function populateMembersTable() {
            membersTable.innerHTML = '';
            
            members.forEach(member => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${member.welfareNo}</td>
                    <td>${member.name}</td>
                    <td>KSH ${member.event1}</td>
                    <td>KSH ${member.event2}</td>
                    <td>KSH ${member.event3}</td>
                    <td>KSH ${member.total}</td>
                `;
                membersTable.appendChild(row);
            });
        }

        // Set up event listeners
        function setupEventListeners() {
            // Navigation
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetSection = this.getAttribute('data-section');
                    
                    // Update active nav link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show target section
                    sections.forEach(section => {
                        section.classList.remove('active');
                        if (section.id === targetSection) {
                            section.classList.add('active');
                        }
                    });
                });
            });

            // Search member
            searchMemberBtn.addEventListener('click', function() {
                const welfareNo = welfareNumberInput.value.trim().toUpperCase();
                
                if (!welfareNo) {
                    alert('Please enter a welfare number');
                    return;
                }
                
                const member = members.find(m => m.welfareNo === welfareNo);
                
                if (member) {
                    alert(`Member Found:\nName: ${member.name}\nTotal Contributions: KSH ${member.total}`);
                } else {
                    alert('Member not found. Please check the welfare number and try again.');
                }
            });

            // Download individual report
            downloadIndividualBtn.addEventListener('click', function() {
                const welfareNo = welfareNumberInput.value.trim().toUpperCase();
                
                if (!welfareNo) {
                    alert('Please enter a welfare number to download individual report');
                    return;
                }
                
                const member = members.find(m => m.welfareNo === welfareNo);
                
                if (member) {
                    generateIndividualPDF(member);
                } else {
                    alert('Member not found. Please check the welfare number and try again.');
                }
            });

            // Download full report
            downloadFullBtn.addEventListener('click', function() {
                generateFullPDF();
            });

            // Contact form submission
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message. We will get back to you soon!');
                contactForm.reset();
            });
        }

        // Generate individual PDF report
        function generateIndividualPDF(member) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Set theme colors
            const primaryColor = [3, 169, 244];
            const primaryLightColor = [79, 195, 247];
            const darkBgColor = [18, 18, 18];
            
            // Add header with logo and title
            doc.setFillColor(...primaryColor);
            doc.rect(0, 0, 210, 40, 'F');
            
            doc.setFontSize(22);
            doc.setTextColor(255, 255, 255);
            doc.setFont(undefined, 'bold');
            doc.text("MT SINAI ALUMNI WELFARE SYSTEM", 105, 15, { align: 'center' });
            
            doc.setFontSize(14);
            doc.text("Member Contribution Report", 105, 25, { align: 'center' });
            
            // Add member details section
            doc.setFillColor(...darkBgColor);
            doc.rect(10, 50, 190, 30, 'F');
            
            doc.setFontSize(16);
            doc.setTextColor(...primaryLightColor);
            doc.text("MEMBER INFORMATION", 20, 60);
            
            doc.setDrawColor(...primaryColor);
            doc.line(20, 63, 80, 63);
            
            // Member details
            doc.setFontSize(12);
            doc.setTextColor(255, 255, 255);
            doc.text(`Welfare Number: ${member.welfareNo}`, 20, 72);
            doc.text(`Member Name: ${member.name}`, 20, 80);
            doc.text(`Total Contributions: KSH ${member.total}`, 20, 88);
            
            // Add contribution details table
            const tableColumn = ["Event", "Amount (KSH)"];
            const tableRows = [
                ["Event 1", member.event1],
                ["Event 2", member.event2],
                ["Event 3", member.event3],
                ["TOTAL", member.total]
            ];
            
            doc.autoTable({
                startY: 100,
                head: [tableColumn],
                body: tableRows,
                theme: 'plain',
                styles: {
                    fillColor: darkBgColor,
                    textColor: [255, 255, 255],
                    lineColor: primaryColor,
                    lineWidth: 0.1
                },
                headStyles: {
                    fillColor: primaryColor,
                    textColor: [255, 255, 255]
                },
                alternateRowStyles: {
                    fillColor: [30, 30, 30]
                }
            });
            
            // Add footer
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                doc.setFontSize(10);
                doc.setTextColor(150, 150, 150);
                doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 285, { align: 'center' });
                doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
            }
            
            // Save the PDF
            doc.save(`MtSinai_Contribution_Report_${member.welfareNo}.pdf`);
        }

        // Generate full PDF report
        function generateFullPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Set theme colors
            const primaryColor = [3, 169, 244];
            const primaryLightColor = [79, 195, 247];
            const darkBgColor = [18, 18, 18];
            
            // Add header with logo and title
            doc.setFillColor(...primaryColor);
            doc.rect(0, 0, 210, 40, 'F');
            
            doc.setFontSize(22);
            doc.setTextColor(255, 255, 255);
            doc.setFont(undefined, 'bold');
            doc.text("MT SINAI ALUMNI WELFARE", 105, 15, { align: 'center' });
            
            doc.setFontSize(14);
            doc.text("Full Contribution Report", 105, 25, { align: 'center' });
            
            // Add summary section
            doc.setFillColor(...darkBgColor);
            doc.rect(10, 50, 190, 20, 'F');
            
            doc.setFontSize(16);
            doc.setTextColor(...primaryLightColor);
            doc.text("CONTRIBUTION SUMMARY", 20, 60);
            
            doc.setDrawColor(...primaryColor);
            doc.line(20, 63, 90, 63);
            
            // Summary details
            const totalContributions = members.reduce((sum, member) => sum + member.total, 0);
            const activeMembers = members.length;
            
            doc.setFontSize(12);
            doc.setTextColor(255, 255, 255);
            doc.text(`Total Members: ${activeMembers}`, 20, 72);
            doc.text(`Total Contributions: KSH ${totalContributions}`, 20, 80);
            doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 20, 88);
            
            // Prepare table data
            const tableColumn = ["Welfare No.", "Name", "Event 1", "Event 2", "Event 3", "Total"];
            const tableRows = members.map(member => [
                member.welfareNo,
                member.name,
                `KSH ${member.event1}`,
                `KSH ${member.event2}`,
                `KSH ${member.event3}`,
                `KSH ${member.total}`
            ]);
            
            // Add contribution details table
            doc.autoTable({
                startY: 100,
                head: [tableColumn],
                body: tableRows,
                theme: 'plain',
                styles: {
                    fillColor: darkBgColor,
                    textColor: [255, 255, 255],
                    lineColor: primaryColor,
                    lineWidth: 0.1,
                    fontSize: 9
                },
                headStyles: {
                    fillColor: primaryColor,
                    textColor: [255, 255, 255]
                },
                alternateRowStyles: {
                    fillColor: [30, 30, 30]
                }
            });
            
            // Add footer
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                doc.setFontSize(10);
                doc.setTextColor(150, 150, 150);
                doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 285, { align: 'center' });
                doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
            }
            
            // Save the PDF
            doc.save("MtSinai_Full_Contribution_Report.pdf");
        }