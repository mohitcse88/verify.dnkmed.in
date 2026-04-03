async function verifyCertificate() {
    const certId = document.getElementById('cert-id').value.trim();
    const resultsContainer = document.getElementById('results-container');
    const verifyBtn = document.getElementById('verify-btn');

    if (!certId) {
        alert("Please enter a Reference Number.");
        return;
    }

    // Show loading state
    verifyBtn.innerText = "Verifying...";
    verifyBtn.disabled = true;
    resultsContainer.classList.add('hidden');

    try {
        // Fetch student data with explicit relative path
        const response = await fetch('./data/certificates.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Find the student
        const student = data.find(s => s.id === certId);

        // Artificial delay for "Verification Service" feel
        setTimeout(() => {
            verifyBtn.innerText = "Verify Now";
            verifyBtn.disabled = false;

            if (student) {
                showSuccess(student);
            } else {
                showError();
            }
        }, 1200);

    } catch (error) {
        console.error("Verification system error:", error);
        alert("System error. Please ensure you are running the site through a local server or try again later.");
        verifyBtn.innerText = "Verify Now";
        verifyBtn.disabled = false;
    }
}

function showSuccess(student) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `
        <div class="result-card">
            <h3><i class="fas fa-check-circle"></i> Verification Successful!</h3>
            <div class="result-detail">
                <p><span class="label">Candidate Name:</span> <span class="value">${student.name}</span></p>
            </div>
            <div class="result-detail">
                <p><span class="label">Certificate ID:</span> <span class="value">${student.id}</span></p>
            </div>
            <div class="result-detail">
                <p><span class="label">Course Name:</span> <span class="value">${student.course}</span></p>
            </div>
            <div class="result-detail">
                <p><span class="label">College:</span> <span class="value">${student.college}</span></p>
            </div>
            <div class="result-detail">
                <p><span class="label">Duration:</span> <span class="value">${student.duration}</span></p>
            </div>
            <div class="result-detail">
                <p><span class="label">Status:</span> <span class="value" style="color: #10b981; font-weight: 700;">${student.status}</span></p>
            </div>
            <div class="result-detail" style="margin-top: 20px; font-size: 11px; color: #9ca3af;">
                <p>This certificate is issued by ${student.issued_by}.</p>
            </div>
        </div>
    `;
    resultsContainer.classList.remove('hidden');
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showError() {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `
        <div class="result-card" style="border-left-color: #ef4444;">
            <h3 style="color: #ef4444;"><i class="fas fa-times-circle"></i> Verification Failed</h3>
            <p>No records found for the provided Reference Number. Please check the ID and try again.</p>
        </div>
    `;
    resultsContainer.classList.remove('hidden');
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
