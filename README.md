# AWS CDK Deployment mit GitHub Actions

Dieses Projekt zeigt, wie man Cloud-Infrastruktur mithilfe des **AWS Cloud Development Kit (CDK)** in **TypeScript** beschreibt und per **GitHub Actions** automatisiert bereitstellt.

---

## 📦 Projektüberblick

- Infrastructure as Code (IaC) mit **AWS CDK**
- Beispiel: Bereitstellung einer **Lambda-Funktion**
- Automatisiertes Deployment per **GitHub Actions**
- Deployment mit `cdk deploy`
- Aufräumen mit `cdk destroy`

---

## 🔧 Voraussetzungen

- AWS-Account mit Zugriffsschlüsseln
- GitHub-Repository mit konfigurierten Secrets
- Node.js ≥ 18
- AWS CDK CLI (`npm install -g aws-cdk`)

---

## 🛠️ Setup

```bash
git clone <repo-url>
cd <projektordner>
npm install
cdk bootstrap
```

## 🚀 Deployment

### 🔹 Manuell (lokal)

```bash
npm run build
cdk deploy
```

### 🔹 Automatisch (GitHub Actions)

Push auf den `main`-Branch triggert den folgenden Workflow:

```yaml
on:
  push:
    branches: [main]
```

**Ablauf:**

* Node & CDK installieren
* Projekt bauen
* Stack deployen

**Erforderliche GitHub Secrets:**

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`

---

## 🧹 Aufräumen

```bash
cdk destroy
```

> Entfernt alle Ressourcen des CDK-Stacks aus der Cloud.

---

## ☁️ Verwendete AWS-Services

* AWS Lambda
* AWS CloudFormation
* AWS CDK
* GitHub Actions
---
