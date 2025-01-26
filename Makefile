RSYNC_OPT = -rluczhv --progress --delete --exclude-from=exclude -e "ssh -p ${SSH_PORT}" ./dist/ ${SSH_USER}@${SSH_HOST}:/var/www/html/

all: build ## build

.PHONY: build
build: ## build
	npm run build

.PHONY: dry-run
dry-run: ## deploy dry-run
	rsync --dry-run ${RSYNC_OPT}

.PHONY: deploy
deploy: ## deploy
	rsync ${RSYNC_OPT}

.PHONY: dev
dev: ## Launch a development server
	npm run dev

.PHONY: help
help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
