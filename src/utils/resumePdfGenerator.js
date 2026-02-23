import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { resume } from '../data/resume';
import { profile } from '../data/profile';
import { leadership } from '../data/leadership';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPos = 20;

  // Colors
  const primaryColor = [232, 71, 42]; // Coral color
  const darkColor = [44, 62, 80];
  const lightGray = [100, 100, 100];

  // Helper function to add section header
  const addSectionHeader = (title) => {
    if (yPos > pageHeight - 30) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFillColor(...primaryColor);
    doc.rect(margin, yPos, pageWidth - 2 * margin, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 3, yPos + 6);
    yPos += 12;
    doc.setTextColor(...darkColor);
  };

  // Helper function to check page break
  const checkPageBreak = (requiredSpace = 30) => {
    if (yPos > pageHeight - requiredSpace) {
      doc.addPage();
      yPos = 20;
      return true;
    }
    return false;
  };

  // === HEADER SECTION ===
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('MD TOWSIF BIN MANNAN', pageWidth / 2, yPos, { align: 'center' });
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...lightGray);
  doc.text('Computer Science & Engineering Student', pageWidth / 2, yPos, { align: 'center' });
  yPos += 6;

  // Contact Information
  const contactInfo = `${profile.location} | ${profile.email} | ${profile.phone}`;
  doc.text(contactInfo, pageWidth / 2, yPos, { align: 'center' });
  yPos += 5;

  const socialInfo = 'LinkedIn: linkedin.com/in/towsif-mannan | GitHub: github.com/tawsif-12';
  doc.text(socialInfo, pageWidth / 2, yPos, { align: 'center' });
  yPos += 10;

  // === SUMMARY SECTION ===
  addSectionHeader('PROFESSIONAL SUMMARY');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const summaryLines = doc.splitTextToSize(resume.summary, pageWidth - 2 * margin);
  doc.text(summaryLines, margin, yPos);
  yPos += summaryLines.length * 5 + 8;

  // === EDUCATION SECTION ===
  addSectionHeader('EDUCATION');
  resume.education.forEach((edu, index) => {
    checkPageBreak();
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(edu.degree, margin, yPos);
    yPos += 5;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...lightGray);
    doc.text(`${edu.school} | ${edu.period}`, margin, yPos);
    yPos += 5;

    doc.text(`GPA: ${edu.gpa}`, margin, yPos);
    yPos += 5;

    if (edu.achievements && edu.achievements.length > 0) {
      edu.achievements.forEach(achievement => {
        checkPageBreak();
        const achievementText = `• ${achievement}`;
        const lines = doc.splitTextToSize(achievementText, pageWidth - 2 * margin - 5);
        doc.text(lines, margin + 3, yPos);
        yPos += lines.length * 5;
      });
    }
    yPos += 5;
  });

  // === EXPERIENCE SECTION ===
  addSectionHeader('PROFESSIONAL EXPERIENCE');
  resume.experience.forEach((exp, index) => {
    checkPageBreak();
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(exp.title, margin, yPos);
    yPos += 5;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...lightGray);
    doc.text(`${exp.company} | ${exp.location} | ${exp.period}`, margin, yPos);
    yPos += 6;

    doc.setTextColor(...darkColor);
    if (exp.responsibilities && exp.responsibilities.length > 0) {
      exp.responsibilities.forEach(resp => {
        checkPageBreak();
        const respText = `• ${resp}`;
        const lines = doc.splitTextToSize(respText, pageWidth - 2 * margin - 5);
        doc.text(lines, margin + 3, yPos);
        yPos += lines.length * 5;
      });
    }
    yPos += 5;
  });

  // === LEADERSHIP & ACTIVITIES SECTION ===
  addSectionHeader('LEADERSHIP & ACTIVITIES');
  leadership.forEach((item, index) => {
    checkPageBreak();
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text(item.role, margin, yPos);
    yPos += 5;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...lightGray);
    doc.text(`${item.organization} | ${item.period}`, margin, yPos);
    yPos += 6;

    doc.setTextColor(...darkColor);
    if (item.achievements && item.achievements.length > 0) {
      item.achievements.forEach(achievement => {
        checkPageBreak();
        const achievementText = `• ${achievement}`;
        const lines = doc.splitTextToSize(achievementText, pageWidth - 2 * margin - 5);
        doc.text(lines, margin + 3, yPos);
        yPos += lines.length * 5;
      });
    }
    yPos += 5;
  });

  // === CERTIFICATIONS SECTION ===
  if (resume.certifications && resume.certifications.length > 0) {
    addSectionHeader('CERTIFICATIONS & ACHIEVEMENTS');
    resume.certifications.forEach((cert, index) => {
      checkPageBreak();
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...darkColor);
      
      const certTitle = cert.credentialId 
        ? `${cert.name} - ${cert.issuer} (${cert.credentialId})`
        : `${cert.name} - ${cert.issuer}`;
      
      const titleLines = doc.splitTextToSize(certTitle, pageWidth - 2 * margin - 5);
      doc.text(titleLines, margin, yPos);
      yPos += titleLines.length * 5;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...lightGray);
      doc.text(cert.date, margin, yPos);
      yPos += 6;
    });
  }

  // === SKILLS SECTION ===
  addSectionHeader('TECHNICAL SKILLS');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...darkColor);
  
  if (resume.skills.technical && resume.skills.technical.length > 0) {
    resume.skills.technical.forEach(skill => {
      checkPageBreak();
      const skillLines = doc.splitTextToSize(`• ${skill}`, pageWidth - 2 * margin - 5);
      doc.text(skillLines, margin + 3, yPos);
      yPos += skillLines.length * 5;
    });
  }
  yPos += 5;

  // === SOFT SKILLS SECTION ===
  addSectionHeader('SOFT SKILLS');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...darkColor);
  
  if (resume.skills.soft && resume.skills.soft.length > 0) {
    const softSkillsText = resume.skills.soft.join(' • ');
    const softSkillsLines = doc.splitTextToSize(softSkillsText, pageWidth - 2 * margin);
    doc.text(softSkillsLines, margin, yPos);
    yPos += softSkillsLines.length * 5;
  }

  // Save the PDF
  doc.save('Md_Towsif_Bin_Mannan_Resume.pdf');
};
