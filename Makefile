
.PHONY: setup
setup:
	env CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o assets/bin/setup cmd/setup/main.go
	docker build -f deployments/setup.Dockerfile -t harbor1.zlibs.com/island/island-setup:alpha .
	docker push harbor1.zlibs.com/island/island-setup:alpha

.PHONY: api
api:
	env CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o assets/bin/parser cmd/parser/main.go
	env CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o assets/bin/api cmd/api/main.go
	docker build -f deployments/api.Dockerfile -t harbor1.zlibs.com/island/island-api:alpha .
	docker push harbor1.zlibs.com/island/island-api:alpha

.PHONY: ui
ui:
	docker build -f deployments/ui.Dockerfile -t harbor1.zlibs.com/island/island-ui:alpha web
	docker push harbor1.zlibs.com/island/island-ui:alpha

.PHONY: scheduler
scheduler:
	env CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o assets/bin/scheduler cmd/scheduler/main.go
	docker build -f deployments/scheduler.Dockerfile -t harbor1.zlibs.com/island/island-scheduler:alpha .
	docker push harbor1.zlibs.com/island/island-scheduler:alpha

.PHONY: debug
debug:
	env CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o assets/bin/debug cmd/debug/main.go
	docker build -f deployments/debug.Dockerfile -t harbor1.zlibs.com/island/island-debug:d .
	docker push harbor1.zlibs.com/island/island-debug:d