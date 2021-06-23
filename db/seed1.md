
:begin
CREATE CONSTRAINT ON (node:`UNIQUE IMPORT LABEL`) ASSERT (node.`UNIQUE IMPORT ID`) IS UNIQUE;
:commit
:begin
UNWIND [{_id:8, properties:{key:"HAS_REL"}}, {_id:9, properties:{key:"HAS_DATATYPE"}}, {_id:10, properties:{key:"TO_NODE"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:ConfigRelDataType;
UNWIND [{_id:60, properties:{created:"2021-2-4 9:49:47", guid:"e5477c22-01ba-4be9-b094-4b58fc7001a2", updated:"2021-2-4 9:49:47", value:"", key:"value"}}, {_id:62, properties:{created:"2021-2-4 9:50:25", guid:"a61a4d0b-9415-4437-a2ba-3c9c39872171", updated:"2021-2-4 9:50:25", value:"Data", key:"value"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:DataConfig:LabelVal;
UNWIND [{_id:54, properties:{created:"2021-2-4 9:47:44", guid:"f027441b-4646-4dfe-a96c-f5d213a1c9e9", updated:"2021-2-4 9:47:44", value:"root", key:"key"}}, {_id:55, properties:{created:"2021-2-4 9:48:20", guid:"4f6adbac-496f-40d0-98b6-68d229849117", updated:"2021-2-4 9:48:20", value:"Data", key:"label"}}, {_id:56, properties:{created:"2021-2-4 9:48:41", guid:"60d66387-8936-4878-acfa-1ad386a7bc09", updated:"2021-2-4 9:48:41", value:"DataConfig", key:"label"}}, {_id:57, properties:{created:"2021-2-4 9:49:5", guid:"f2af76af-751f-449c-999e-cbdab19eb40c", value:"InformationConfig", updated:"2021-2-4 9:49:5", key:"label"}}, {_id:58, properties:{created:"2021-2-4 9:49:20", guid:"ddd3c00c-bb24-4bfe-914e-373d76b3db0a", updated:"2021-2-4 9:49:20", value:"Information", key:"label"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:DataConfig:Node;
UNWIND [{_id:14, properties:{created:"2021-2-4 8:57:56", guid:"58cb3370-c188-4845-8f46-53a9126de6d4", updated:"2021-2-4 8:57:56", value:"", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:Config:Label;
UNWIND [{_id:41, properties:{created:"2021-2-4 9:36:49", guid:"af8f6626-323c-4582-98fe-1c7b00fab164", updated:"2021-2-4 9:36:49", value:"nodeType", key:"key"}}, {_id:42, properties:{created:"2021-2-4 9:37:0", guid:"d4979092-f95c-4706-b323-d40336a601de", updated:"2021-2-4 9:37:0", value:"nodeLabel", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:SystemConfig:Label;
UNWIND [{_id:59, properties:{created:"2021-2-4 9:49:38", guid:"2af83c12-5e3f-4627-865a-ebc4b0bc655c", updated:"2021-2-4 9:49:38", value:"nodeType", key:"key"}}, {_id:61, properties:{created:"2021-2-4 9:50:13", guid:"bdaebf59-30cf-4d92-9cce-fe66a95d4da7", updated:"2021-2-4 9:50:13", value:"nodeLabel", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:DataConfig:Label;
UNWIND [{_id:64, properties:{created:"2021-6-23 16:13:30", guid:"5fcd1e41-e9db-4890-bd6a-d672ffafa191", value:"tet", updated:"2021-6-23 16:13:30"}}, {_id:65, properties:{created:"2021-6-23 16:13:30", guid:"5ac25420-1955-4650-b4d7-585db4bca682", value:"tet", updated:"2021-6-23 16:13:30"}}, {_id:67, properties:{created:"2021-6-23 16:13:41", guid:"7f28ea17-e815-4b76-8323-a9d3cb2aecd8", value:"te", updated:"2021-6-23 16:13:41"}}, {_id:68, properties:{created:"2021-6-23 16:13:41", guid:"f89bc58a-0c9c-4335-9ab2-3a664ee597d7", value:"te", updated:"2021-6-23 16:13:41"}}, {_id:70, properties:{created:"2021-6-23 16:13:52", guid:"da091601-8421-4de8-a4d1-de603c868217", value:"tet", updated:"2021-6-23 16:13:52"}}, {_id:71, properties:{created:"2021-6-23 16:13:52", guid:"cb3c38f8-ad26-41c2-9da7-b4d900cfd85e", value:"tet", updated:"2021-6-23 16:13:52"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:PropVal;
UNWIND [{_id:43, properties:{created:"2021-2-4 9:37:27", guid:"e567ab63-c731-412b-b48d-947b8ff39098", updated:"2021-2-4 9:37:27", value:"System", key:"key"}}, {_id:44, properties:{created:"2021-2-4 9:37:36", guid:"6e18b2b8-d119-444d-aa89-0bc9a40fbcbb", updated:"2021-2-4 9:37:36", value:"", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:SystemConfig:LabelVal;
UNWIND [{_id:30, properties:{created:"2021-2-4 9:11:22", guid:"085e76fb-b8e3-4853-85ea-dfbf379ed4cf", updated:"2021-2-4 9:11:22", value:"Admin", key:"value"}}, {_id:31, properties:{created:"2021-2-4 9:11:37", guid:"35870454-979e-435e-b555-57af3428a5ad", updated:"2021-2-4 9:11:37", value:"", key:"value"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:AdminConfig:LabelVal;
UNWIND [{_id:45, properties:{created:"2021-2-4 9:38:18", guid:"40cb81eb-a652-4d04-aa30-1f3cdad604aa", updated:"2021-2-4 9:38:18", value:"root", key:"key"}}, {_id:46, properties:{created:"2021-2-4 9:43:3", guid:"075fcea6-05e0-41d4-a382-6a73ec30e37f", value:"InformationConfig", updated:"2021-2-4 9:43:3", key:"label"}}, {_id:47, properties:{created:"2021-2-4 9:43:27", guid:"af69c185-3fa9-4eee-8c10-a473472e536c", updated:"2021-2-4 9:43:27", value:"Information", key:"label"}}, {_id:48, properties:{created:"2021-2-4 9:44:2", guid:"002bdc12-1df8-4c7c-b164-9c1c2ec2750d", updated:"2021-2-4 9:44:2", value:"SystemConfig", key:"label"}}, {_id:49, properties:{created:"2021-2-4 9:44:13", guid:"0ea0df9f-f69f-4a9e-a386-2fe26851ee50", updated:"2021-2-4 9:44:13", value:"System", key:"label"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:Node:InformationConfig;
UNWIND [{_id:15, properties:{created:"2021-2-4 8:58:21", guid:"a97755b6-aba7-452d-92b1-ac958a328788", updated:"2021-2-4 8:58:21", value:"", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:Config:LabelVal;
UNWIND [{_id:12, properties:{created:"2021-2-4 8:56:27", guid:"411fd582-1059-4cd7-b02e-bdbf9bc37b13", updated:"2021-2-4 8:56:27", value:"HAS_LABEL", key:"key"}}, {_id:13, properties:{created:"2021-2-4 8:57:8", guid:"693ccb8d-ea4a-42ed-b564-d126ae11c7bf", updated:"2021-2-4 8:57:8", value:"HAS_LABELVAL", key:"key"}}, {_id:16, properties:{created:"2021-2-4 8:59:51", guid:"ce2fd84c-c0ce-465b-86b6-f145a5fc2bba", updated:"2021-2-4 8:59:51", value:"HAS_CONFIG", key:"key"}}, {_id:17, properties:{created:"2021-2-4 9:0:7", guid:"af55bba1-d970-4af3-a009-e67a5307dd5e", updated:"2021-2-4 9:0:7", value:"HAS_PARENT", key:"key"}}, {_id:18, properties:{created:"2021-2-4 9:0:27", guid:"eeaf3881-ca12-4422-a330-b4fa52072f0e", updated:"2021-2-4 9:0:27", value:"HAS_SUB", key:"key"}}, {_id:19, properties:{created:"2021-2-4 9:0:50", guid:"7a30b33b-b587-48cc-bfef-a2d12cdff28d", updated:"2021-2-4 9:0:50", value:"HAS_PARENTCONFIG", key:"key"}}, {_id:21, properties:{created:"2021-2-4 9:3:7", guid:"5fc886a0-9428-4cf8-a3ff-0858cee4d14e", updated:"2021-2-4 9:3:7", value:"HAS_PROP", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:Config:Rel;
UNWIND [{_id:1, properties:{key:"Node"}}, {_id:2, properties:{key:"Rel"}}, {_id:3, properties:{key:"DataType"}}, {_id:4, properties:{key:"Label"}}, {_id:5, properties:{key:"LabelVal"}}, {_id:6, properties:{key:"Prop"}}, {_id:7, properties:{key:"PropVal"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:ConfigNodeDataType;
UNWIND [{_id:0, properties:{password:"$2a$10$Ew3EUzagl.eyqOD/X4JhlOwY6Sltz1JKOvabXULKTVK88NUr9pz92", created:"2020-12-18 9:2:16", name:"Test", guid:"bcdcb7d0-29e2-4496-b2a8-0f772d46b425", email:"test@test", token:"d4792f1f8c3386204c7e61626019620e1ba47bafe8ecc927d4cabac8c81671e7452ddbbf8b57e7d41675228322556e679d989652c2c3ef2599cd35d41a733c6e"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:User;
UNWIND [{_id:50, properties:{created:"2021-2-4 9:44:36", guid:"b70e1b90-e585-4213-bd84-469e361c4796", updated:"2021-2-4 9:44:36", value:"nodeType", key:"key"}}, {_id:52, properties:{created:"2021-2-4 9:45:35", guid:"1004dae0-b526-4825-b715-88e7c2c836d7", updated:"2021-2-4 9:45:35", value:"nodeLabel", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:Label:InformationConfig;
UNWIND [{_id:24, properties:{created:"2021-2-4 9:4:25", guid:"de7962dd-c261-412a-a9bc-cf3b67a8f5de", updated:"2021-2-4 9:4:25", value:"string", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:Config:DataType;
UNWIND [{_id:25, properties:{created:"2021-2-4 9:8:14", guid:"cce7bc08-8b8e-4387-bb22-4103ae06de40", updated:"2021-2-4 9:8:14", value:"root", key:"key"}}, {_id:26, properties:{created:"2021-2-4 9:9:8", guid:"e56c0682-c986-4412-802e-6e29309d18c8", updated:"2021-2-4 9:9:47", value:"Admin", key:"label"}}, {_id:27, properties:{created:"2021-2-4 9:9:43", guid:"78ffbdb3-a9a2-4bb8-b5bb-ae2a17b9e033", updated:"2021-2-4 9:9:43", value:"AdminConfig", key:"label"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:AdminConfig:Node;
UNWIND [{_id:28, properties:{created:"2021-2-4 9:10:49", guid:"5a1fdcd5-3a28-4014-a100-ef65425053d2", updated:"2021-2-4 9:10:49", value:"nodeType", key:"key"}}, {_id:29, properties:{created:"2021-2-4 9:11:0", guid:"809aadc0-0467-4ac0-8ca9-b3c4e5359cc3", updated:"2021-2-4 9:11:0", value:"nodeLabel", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:AdminConfig:Label;
UNWIND [{_id:36, properties:{created:"2021-2-4 9:33:41", guid:"454dde3b-e9d3-4f6b-9c24-772d5792e26a", updated:"2021-2-4 9:33:41", value:"root", key:"key"}}, {_id:37, properties:{created:"2021-2-4 9:34:6", guid:"bac2142d-bf4c-48aa-ac98-ab9859dfdcf4", updated:"2021-2-4 9:34:6", value:"SystemConfig", key:"label"}}, {_id:38, properties:{created:"2021-2-4 9:34:32", guid:"a680842e-a9b7-4447-9f78-a212b02d3312", updated:"2021-2-4 9:34:32", value:"System", key:"label"}}, {_id:39, properties:{created:"2021-2-4 9:35:34", guid:"9f42a3c1-08d6-4c0e-a14d-fa6ae1e14758", updated:"2021-2-4 9:35:34", value:"AdminConfig", key:"label"}}, {_id:40, properties:{created:"2021-2-4 9:35:59", guid:"db1e0a7e-78e2-47c9-b439-4fed4eb383e7", updated:"2021-2-4 9:35:59", value:"Admin", key:"label"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:SystemConfig:Node;
UNWIND [{_id:22, properties:{created:"2021-2-4 9:3:39", guid:"06fbc6d8-0aa7-470a-8ac4-38409fad4d8e", updated:"2021-2-4 9:3:39", value:"title", key:"key"}}, {_id:23, properties:{created:"2021-2-4 9:4:1", guid:"1604f76f-3a4a-40a6-9214-9069c613ce0f", updated:"2021-2-4 9:4:1", value:"description", key:"key"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:Prop:Config;
UNWIND [{_id:11, properties:{created:"2021-2-4 8:47:41", guid:"d2080561-dba5-4b3f-a9fc-91fa38c8cd37", updated:"2021-2-4 8:47:41", value:"", key:""}}, {_id:20, properties:{created:"2021-2-4 9:1:31", guid:"6eae3270-3357-4ac0-994e-1399c54e364d", updated:"2021-2-4 9:1:31", value:"", key:"label"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:Config:Node;
UNWIND [{_id:51, properties:{created:"2021-2-4 9:47:19", guid:"c34087c8-1f53-4af6-912b-8aca9ed86061", updated:"2021-2-4 9:47:19", value:"Information", key:"value"}}, {_id:53, properties:{created:"2021-2-4 9:46:55", guid:"5572277c-deb8-4c19-a1d8-0ad80970a227", updated:"2021-2-4 9:46:55", value:"", key:"value"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:InformationConfig:LabelVal;
:commit
:begin
UNWIND [{start: {_id:45}, end: {_id:51}, properties:{created:"2021-2-4 9:47:19", guid:"8f8207c5-7979-4f4d-86b9-2149d804c14d", updated:"2021-2-4 9:47:19"}}, {start: {_id:45}, end: {_id:53}, properties:{created:"2021-2-4 9:46:55", guid:"d5660ad5-a871-47c9-b5ce-96d603b8a1be", updated:"2021-2-4 9:46:55"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABELVAL]->(end) SET r += row.properties;
UNWIND [{start: {_id:45}, end: {_id:49}, properties:{created:"2021-2-4 9:44:13", guid:"b8c3fbd0-d6d2-4902-867e-2ee22290605b", updated:"2021-2-4 9:44:13"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_PARENT]->(end) SET r += row.properties;
UNWIND [{start: {_id:12}, end: {_id:14}, properties:{created:"2021-2-4 8:57:56", guid:"04f8087b-b87a-4dfb-b746-5addda063103", updated:"2021-2-4 8:57:56"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:TO_NODE]->(end) SET r += row.properties;
UNWIND [{start: {_id:15}, end: {_id:12}, properties:{created:"2021-2-4 8:58:42", guid:"a737277c-0f74-4341-9c40-a1d4e3e3ca00"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_REL]->(end) SET r += row.properties;
UNWIND [{start: {_id:64}, end: {_id:22}, properties:{created:"2021-6-23 16:13:30", guid:"48060bce-4723-44fc-baf3-d7f0e7b9f25e", updated:"2021-6-23 16:13:30"}}, {start: {_id:65}, end: {_id:23}, properties:{created:"2021-6-23 16:13:30", guid:"737b2fe6-0ccf-4dd7-859b-bba1dc27fa09", updated:"2021-6-23 16:13:30"}}, {start: {_id:67}, end: {_id:22}, properties:{created:"2021-6-23 16:13:41", guid:"c05ef07b-f9fb-4f98-a49b-d65a8fc5b47d", updated:"2021-6-23 16:13:41"}}, {start: {_id:68}, end: {_id:23}, properties:{created:"2021-6-23 16:13:41", guid:"073f4509-0e8d-457b-a627-5d1ea3d541d5", updated:"2021-6-23 16:13:41"}}, {start: {_id:70}, end: {_id:22}, properties:{created:"2021-6-23 16:13:52", guid:"c0b0490d-59a5-48f8-a720-7101d8db02af", updated:"2021-6-23 16:13:52"}}, {start: {_id:71}, end: {_id:23}, properties:{created:"2021-6-23 16:13:52", guid:"fa1b12a9-d0d4-4622-8e6b-8ccbeebb5821", updated:"2021-6-23 16:13:52"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_PROP]->(end) SET r += row.properties;
UNWIND [{start: {_id:31}, end: {_id:28}, properties:{created:"2021-2-4 9:12:4", guid:"6f06a754-4b0c-4a42-b84e-d5f57a25d0af"}}, {start: {_id:30}, end: {_id:29}, properties:{created:"2021-2-4 9:12:20", guid:"4a49e40e-aa20-417f-a336-c5f46b6fc578"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABEL]->(end) SET r += row.properties;
UNWIND [{start: {_id:25}, end: {_id:26}, properties:{created:"2021-2-4 9:9:8", guid:"98592965-4c17-4d21-b857-44078977e401", updated:"2021-2-4 9:9:8"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_SUB]->(end) SET r += row.properties;
UNWIND [{start: {_id:11}, end: {_id:12}, properties:{created:"2021-2-4 8:56:27", guid:"f7ce1434-56a2-4b7e-b68e-e5d57a195a3d", updated:"2021-2-4 8:56:27"}}, {start: {_id:11}, end: {_id:13}, properties:{created:"2021-2-4 8:57:8", guid:"46e5ab8f-f4bd-477a-9c3e-794788d9f6cd", updated:"2021-2-4 8:57:8"}}, {start: {_id:11}, end: {_id:16}, properties:{created:"2021-2-4 8:59:51", guid:"8a93e18c-c8b6-4a11-a40a-dff1caac28e7", updated:"2021-2-4 8:59:51"}}, {start: {_id:11}, end: {_id:17}, properties:{created:"2021-2-4 9:0:7", guid:"f1606424-a191-44de-8c49-8e42b4457ee1", updated:"2021-2-4 9:0:7"}}, {start: {_id:11}, end: {_id:18}, properties:{created:"2021-2-4 9:0:27", guid:"b97bd614-bcae-43db-845b-c53ed80c1ff5", updated:"2021-2-4 9:0:27"}}, {start: {_id:11}, end: {_id:19}, properties:{created:"2021-2-4 9:0:50", guid:"80d936e8-1ef6-49cb-9d04-540d23873252", updated:"2021-2-4 9:0:50"}}, {start: {_id:11}, end: {_id:21}, properties:{created:"2021-2-4 9:3:7", guid:"23b836a4-7ffa-41ba-930b-aa9c6d41a6a0", updated:"2021-2-4 9:3:7"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_REL]->(end) SET r += row.properties;
UNWIND [{start: {_id:54}, end: {_id:60}, properties:{created:"2021-2-4 9:49:47", guid:"13e69db3-ad0f-4a2a-8104-fb50a813c17a", updated:"2021-2-4 9:49:47"}}, {start: {_id:54}, end: {_id:62}, properties:{created:"2021-2-4 9:50:25", guid:"634781bc-6445-4855-9b39-59e76682639f", updated:"2021-2-4 9:50:25"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABELVAL]->(end) SET r += row.properties;
UNWIND [{start: {_id:36}, end: {_id:38}, properties:{created:"2021-2-4 9:34:32", guid:"4f39dc9f-566e-4710-b12f-8baf71c2767c", updated:"2021-2-4 9:34:32"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_SUB]->(end) SET r += row.properties;
UNWIND [{start: {_id:21}, end: {_id:22}, properties:{created:"2021-2-4 9:3:39", guid:"1855a802-20a1-44a9-880f-6cc7044119f5", updated:"2021-2-4 9:3:39"}}, {start: {_id:21}, end: {_id:23}, properties:{created:"2021-2-4 9:4:1", guid:"e936d0d7-4c14-4ec0-a0cf-f1aaba68a7f1", updated:"2021-2-4 9:4:1"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:TO_NODE]->(end) SET r += row.properties;
UNWIND [{start: {_id:36}, end: {_id:41}, properties:{created:"2021-2-4 9:36:49", guid:"674be1b9-028f-4aa3-a8ae-701a483b890d", updated:"2021-2-4 9:36:49"}}, {start: {_id:36}, end: {_id:42}, properties:{created:"2021-2-4 9:37:0", guid:"8f1be4f2-0889-44d5-9721-ee348b184fd8", updated:"2021-2-4 9:37:0"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABEL]->(end) SET r += row.properties;
UNWIND [{start: {_id:51}, end: {_id:52}, properties:{created:"2021-2-4 9:47:26", guid:"83adae9c-1e5e-433d-b64c-ae5ea82b263a"}}, {start: {_id:53}, end: {_id:50}, properties:{created:"2021-2-4 9:47:5", guid:"1fed8e01-3676-4fc3-963f-6b74d3063af3"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABEL]->(end) SET r += row.properties;
UNWIND [{start: {_id:54}, end: {_id:56}, properties:{created:"2021-2-4 9:48:41", guid:"53d9281a-5e54-44c5-9ce4-fda1b0c0672d", updated:"2021-2-4 9:48:41"}}, {start: {_id:55}, end: {_id:56}, properties:{created:"2021-2-4 9:48:48", guid:"54110130-e1e9-42de-adb1-a9702c90d0cb"}}, {start: {_id:58}, end: {_id:57}, properties:{created:"2021-2-4 9:49:27", guid:"e4cf1358-c694-450e-81e8-b73387dd888d"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_CONFIG]->(end) SET r += row.properties;
UNWIND [{start: {_id:45}, end: {_id:48}, properties:{created:"2021-2-4 9:44:2", guid:"f51cde98-0834-4bf9-9aab-1eff662fa670", updated:"2021-2-4 9:44:2"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_PARENTCONFIG]->(end) SET r += row.properties;
UNWIND [{start: {_id:54}, end: {_id:57}, properties:{created:"2021-2-4 9:49:5", guid:"d300ccf8-8774-4f43-939d-af707928ac5f", updated:"2021-2-4 9:49:5"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_PARENTCONFIG]->(end) SET r += row.properties;
UNWIND [{start: {_id:13}, end: {_id:15}, properties:{created:"2021-2-4 8:58:21", guid:"0bb6d7dd-c299-4a11-b2d3-15a9d7dcd4b8", updated:"2021-2-4 8:58:21"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_REL]->(end) SET r += row.properties;
UNWIND [{start: {_id:23}, end: {_id:24}, properties:{created:"2021-2-4 9:4:25", guid:"5d9fa530-ee7b-412b-bb8d-464ca2f2b571", updated:"2021-2-4 9:4:25"}}, {start: {_id:22}, end: {_id:24}, properties:{created:"2021-2-4 9:4:34", guid:"9d4c9e44-0dc0-4df1-92dc-f3fa57c931cd"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_DATATYPE]->(end) SET r += row.properties;
UNWIND [{start: {_id:36}, end: {_id:39}, properties:{created:"2021-2-4 9:35:34", guid:"71041cd2-5112-4c54-b266-c98731eceede", updated:"2021-2-4 9:35:34"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_PARENTCONFIG]->(end) SET r += row.properties;
UNWIND [{start: {_id:43}, end: {_id:42}, properties:{created:"2021-2-4 9:37:47", guid:"d10fa448-d6d6-401b-86f2-9f2a1f32136c"}}, {start: {_id:44}, end: {_id:41}, properties:{created:"2021-2-4 9:37:58", guid:"8982ab4b-04eb-4f7d-8128-f255077e98f9"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABEL]->(end) SET r += row.properties;
UNWIND [{start: {_id:36}, end: {_id:43}, properties:{created:"2021-2-4 9:37:27", guid:"bb5dd1eb-e180-4689-8d32-a3cc09dbcf98", updated:"2021-2-4 9:37:27"}}, {start: {_id:36}, end: {_id:44}, properties:{created:"2021-2-4 9:37:36", guid:"c311fd9a-c124-425f-bd6b-d3f3d6aa5413", updated:"2021-2-4 9:37:36"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABELVAL]->(end) SET r += row.properties;
UNWIND [{start: {_id:26}, end: {_id:27}, properties:{created:"2021-2-4 9:9:43", guid:"8c55f165-4cd7-4d30-9be4-856a396d67e4", updated:"2021-2-4 9:9:43"}}, {start: {_id:25}, end: {_id:27}, properties:{created:"2021-2-4 9:10:1", guid:"fe8cb294-6260-484d-beb2-9787010b2c6f"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_CONFIG]->(end) SET r += row.properties;
UNWIND [{start: {_id:25}, end: {_id:30}, properties:{created:"2021-2-4 9:11:22", guid:"3d9a8ff6-6bf1-4b87-b8ea-20b461c00fec", updated:"2021-2-4 9:11:22"}}, {start: {_id:25}, end: {_id:31}, properties:{created:"2021-2-4 9:11:37", guid:"e017be45-24f8-440b-b3ab-7dca21aecc5c", updated:"2021-2-4 9:11:37"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABELVAL]->(end) SET r += row.properties;
UNWIND [{start: {_id:36}, end: {_id:37}, properties:{created:"2021-2-4 9:34:6", guid:"d020869b-2fba-498d-817a-e46126945592", updated:"2021-2-4 9:34:6"}}, {start: {_id:38}, end: {_id:37}, properties:{created:"2021-2-4 9:34:56", guid:"3925c461-7639-4257-926e-bac26b59270b"}}, {start: {_id:40}, end: {_id:39}, properties:{created:"2021-2-4 9:36:15", guid:"c37b4420-701f-41f8-8b7a-d67d1fe12522"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_CONFIG]->(end) SET r += row.properties;
UNWIND [{start: {_id:60}, end: {_id:59}, properties:{created:"2021-2-4 9:49:54", guid:"b39d847d-72a9-452e-b183-01ce2a5e6ff5"}}, {start: {_id:62}, end: {_id:61}, properties:{created:"2021-2-4 9:50:32", guid:"4cc4f9c5-1e89-4744-8b2d-b07de00cd3e5"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABEL]->(end) SET r += row.properties;
UNWIND [{start: {_id:36}, end: {_id:40}, properties:{created:"2021-2-4 9:35:59", guid:"ef683175-d45d-42e2-abfc-0d27db08c422", updated:"2021-2-4 9:35:59"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_PARENT]->(end) SET r += row.properties;
UNWIND [{start: {_id:45}, end: {_id:50}, properties:{created:"2021-2-4 9:44:36", guid:"8d351943-c7b4-4857-8e4d-cbe52a9dacf2", updated:"2021-2-4 9:44:36"}}, {start: {_id:45}, end: {_id:52}, properties:{created:"2021-2-4 9:45:35", guid:"e31d96d7-1eba-4bcc-bbbb-a9c1e0985c3a", updated:"2021-2-4 9:45:35"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABEL]->(end) SET r += row.properties;
UNWIND [{start: {_id:45}, end: {_id:46}, properties:{created:"2021-2-4 9:43:3", guid:"95a589ce-7b21-4cc4-b34c-80bb72259da1", updated:"2021-2-4 9:43:3"}}, {start: {_id:47}, end: {_id:46}, properties:{created:"2021-2-4 9:43:34", guid:"0a70d06f-1c19-4041-944e-ccc7c8b03e1c"}}, {start: {_id:49}, end: {_id:48}, properties:{created:"2021-2-4 9:44:21", guid:"1a14d79d-d91f-498f-b1b0-dcbde7b4cf4d"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_CONFIG]->(end) SET r += row.properties;
UNWIND [{start: {_id:45}, end: {_id:47}, properties:{created:"2021-2-4 9:43:27", guid:"7b1299c4-82eb-4375-87d9-5579455eef5e", updated:"2021-2-4 9:43:27"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_SUB]->(end) SET r += row.properties;
UNWIND [{start: {_id:54}, end: {_id:59}, properties:{created:"2021-2-4 9:49:38", guid:"6ee24509-ea02-45c0-bc40-71f4036291a3", updated:"2021-2-4 9:49:38"}}, {start: {_id:54}, end: {_id:61}, properties:{created:"2021-2-4 9:50:13", guid:"e5cb5c51-c781-49d9-820b-a749d81e74d4", updated:"2021-2-4 9:50:13"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABEL]->(end) SET r += row.properties;
UNWIND [{start: {_id:25}, end: {_id:28}, properties:{created:"2021-2-4 9:10:49", guid:"2367904c-fdb0-4b33-9fbd-ac3d9efb5aa0", updated:"2021-2-4 9:10:49"}}, {start: {_id:25}, end: {_id:29}, properties:{created:"2021-2-4 9:11:0", guid:"72d9132c-ed24-4752-a003-009148c63f2f", updated:"2021-2-4 9:11:0"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LABEL]->(end) SET r += row.properties;
UNWIND [{start: {_id:54}, end: {_id:55}, properties:{created:"2021-2-4 9:48:20", guid:"7e1355ee-a8e6-44ec-971a-5bf13e5d814d", updated:"2021-2-4 9:48:20"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_SUB]->(end) SET r += row.properties;
UNWIND [{start: {_id:18}, end: {_id:20}, properties:{created:"2021-2-4 9:1:31", guid:"14820337-e2d8-4416-a660-0c34ca002923", updated:"2021-2-4 9:1:31"}}, {start: {_id:16}, end: {_id:20}, properties:{created:"2021-2-4 9:1:44", guid:"6181fafc-d7bc-4a02-8927-090dc5c323e3"}}, {start: {_id:19}, end: {_id:20}, properties:{created:"2021-2-4 9:1:56", guid:"81617082-c900-43bd-8ba9-a8da98a65d59"}}, {start: {_id:17}, end: {_id:20}, properties:{created:"2021-2-4 9:2:6", guid:"e931086a-f6c3-45a4-b043-3b00097a13ff"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:TO_NODE]->(end) SET r += row.properties;
UNWIND [{start: {_id:54}, end: {_id:58}, properties:{created:"2021-2-4 9:49:20", guid:"f21e7dcd-2012-4dbe-8fce-a0cebe3d66b9", updated:"2021-2-4 9:49:20"}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_PARENT]->(end) SET r += row.properties;
:commit
:begin
MATCH (n:`UNIQUE IMPORT LABEL`)  WITH n LIMIT 20000 REMOVE n:`UNIQUE IMPORT LABEL` REMOVE n.`UNIQUE IMPORT ID`;
:commit
:begin
DROP CONSTRAINT ON (node:`UNIQUE IMPORT LABEL`) ASSERT (node.`UNIQUE IMPORT ID`) IS UNIQUE;
:commit
