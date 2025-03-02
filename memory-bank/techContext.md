# Technical Context

## Technology Stack

List and describe the main technologies used in the project

## Development Environment

### VSCode Configuration

The project includes a `.vscode` directory with standardized configuration:

* settings.json
  * Enforces consistent code formatting
  * Configures markdownlint rules
  * Sets file associations and editor behaviors
  * Manages workspace-specific settings

* extensions.json
  * Required Extensions:
    * davidanson.vscode-markdownlint: Markdown linting
    * yzhang.markdown-all-in-one: Markdown support
    * esbenp.prettier-vscode: Code formatting
    * dbaeumer.vscode-eslint: JavaScript/TypeScript linting
    * streetsidesoftware.code-spell-checker: Spell checking
    * eamodio.gitlens: Git integration
    * ms-vscode.live-server: Live preview

* launch.json
  * Provides debug configurations
  * Configured for Node.js debugging

* tasks.json
  * Custom tasks for:
    * Memory bank verification
    * Markdown lint checking

* snippets/markdown.json
  * Custom snippets for memory bank documentation:
    * Memory bank section template (prefix: mbs)
    * Memory bank file header (prefix: mbh)
    * Progress item template (prefix: mbp)

### Maintenance Requirements

* All VSCode configurations must be maintained in the `.vscode` directory
* New snippets should be added for repetitive code patterns
* Extension recommendations should be updated as new tools are adopted
* Settings should be kept in sync with project standards

## Build Process

How to build the project, including any build tools or scripts

## Deployment Process

How the project is deployed to various environments

## Testing Strategy

Approach to testing, including tools and frameworks

## Dependencies

Key external dependencies and their purposes

## Configuration

How the system is configured across environments

## Technical Constraints

Technical limitations or constraints that impact development

## Version Control

Version control strategy, branching model, etc.

## Monitoring and Logging

How the system is monitored and how logs are handled

---

This document should be updated when there are changes to the technology stack, development environment, or technical processes.
