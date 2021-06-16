BUILD := dist/
TARGET := ../KaichengYang.github.io

build: $(BUILD)

$(BUILD):
	npm run-script build
	rsync -a $(BUILD) $(TARGET)

.PHONY: clean
clean:
	rm -r $(BUILD)