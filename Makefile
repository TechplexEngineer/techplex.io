
all:
	@echo "deploy   Sends the dist directory to techplex.io"

deploy:
	rsync -v -r  ./dist/ techplex@blake.metheus.org:/var/www/techplex.io/
